import React, { useState, useRef } from 'react';
import {
  ArrowUpTrayIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { Loader } from 'lucide-react';
import { useInterview } from '../hooks/useInterview';
import { useNavigate } from 'react-router';
import { useAuth } from '../../auth/hooks/auth';

export default function Home() {
  const [jobDescription, setJobDescription] = useState('');
  const [selfDescription, setSelfDescription] = useState('');
  const { loading, generateReport, reports } = useInterview();
  const navigate = useNavigate();
  const resumeInputRef = useRef(null);
  const { handleLogout } = useAuth();

  // Interactive File Upload State
  const [uploadedFile, setUploadedFile] = useState({
    name: 'Sarah_Chen_Resume_2025.pdf',
    size: '1.2 MB',
    status: 'Ready for audit'
  });
  const [isDragging, setIsDragging] = useState(false);

  const handleGenerateReport = async () => {
    const resumeFile = resumeInputRef.current?.files[0];

    if (!jobDescription || !selfDescription || !resumeFile) {
      alert('Please fill in all fields and upload a resume.');
      return;
    }

    const data = await generateReport({ jobDescription, resumeFile, selfDescription });
    navigate(`/interview/${data._id}`);
  }

  // Helper to format raw bytes to KB/MB
  const formatFileSize = (bytes) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  // Handle selected file (via drop or file picker)
  const handleFileSelect = (file) => {
    if (!file) return;

    // Optional validation: check PDF/DOCX format and size under 15MB
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
    if (!validTypes.includes(file.type)) {
      alert('Please upload a PDF file.');
      return;
    }

    if (file.size > 15 * 1024 * 1024) {
      alert('File size exceeds the 15MB limit.');
      return;
    }

    setUploadedFile({
      name: file.name,
      size: formatFileSize(file.size),
      status: 'Ready for audit'
    });
  };

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const handleClickLogout = async () => {
    await handleLogout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-100 via-sky-50 to-emerald-100 text-slate-700 font-sans p-6 sm:p-10 relative overflow-hidden">
        <Loader className="animate-spin w-12 h-12 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans text-slate-800 relative">
      <header className="w-full max-w-5xl mx-auto px-4 pt-6 flex justify-end">
        <button
          onClick={handleClickLogout}
          className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-red-600 border border-slate-200 hover:border-red-200 bg-white rounded-lg transition-colors shadow-sm z-50 absolute cursor-pointer"
        >
          <ArrowRightOnRectangleIcon className="w-4 h-4" />
          Logout
        </button>
      </header>
      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-4 py-8 w-full flex-grow flex flex-col justify-center">

        {/* Title & Subtitle */}
        <div className="text-center mb-8 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-3">
            Generate Your Tailored Career & Interview Readiness Report
          </h1>
          <p className="text-sm md:text-base text-slate-500">
            Provide the target role details, a brief personal introduction, and your resume to receive an instant comprehensive ATS & interview analysis.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-6 md:p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Left Column - Target Job Description */}
            <div className="flex flex-col">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h2 className="text-sm font-semibold text-slate-900">Target Job Description</h2>
                  <p className="text-xs text-slate-400">Paste the job description, key responsibilities, or role requirements</p>
                </div>
              </div>

              <textarea
                rows={10}
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste job description or requirements here (e.g. Senior Backend Engineer at Stripe - We are looking for an experienced engineer to build resilient payment infrastructure, design distributed microservices, and improve developer velocity using Go, Java, and AWS...)"
                className="w-full flex-grow p-3 text-xs bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none placeholder-slate-400 text-slate-700"
              />

              <div className="flex justify-between items-center text-[11px] text-slate-400 mt-2">
                <span>Supports raw text or parsed bullet points</span>
                <span>Min. 100 characters recommended</span>
              </div>
            </div>

            {/* Right Column - Self Description & Upload Resume */}
            <div className="flex flex-col justify-between space-y-6">
              {/* Self Description */}
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Self Description & Background</h2>
                <p className="text-xs text-slate-400 mb-2">Brief summary of your background, years of experience, or specific career goals</p>

                <textarea
                  rows={4}
                  value={selfDescription}
                  onChange={(e) => setSelfDescription(e.target.value)}
                  placeholder="e.g., Senior software engineer with 6+ years in distributed systems, looking to transition into principal engineering roles with high-scale microservices. Passionate about low-latency caching and developer tooling."
                  className="w-full p-3 text-xs bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none placeholder-slate-400 text-slate-700"
                />
              </div>

              {/* Upload Resume Section */}
              <div>
                <h2 className="text-sm font-semibold text-slate-900">Upload Resume</h2>
                <p className="text-xs text-slate-400 mb-2">Provide your latest CV or portfolio PDF for semantic match analysis</p>

                {/* Hidden File Input */}
                <input
                  type="file"
                  ref={resumeInputRef}
                  onChange={handleFileInputChange}
                  accept=".pdf"
                  className="hidden"
                />

                {/* Dropzone Container */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => resumeInputRef.current?.click()}
                  className={`border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition cursor-pointer ${isDragging
                    ? 'border-blue-500 bg-blue-50/50'
                    : 'border-slate-200 bg-slate-50/50 hover:bg-slate-50'
                    }`}
                >
                  <div className="bg-blue-50 p-2 rounded-full mb-2">
                    <ArrowUpTrayIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-xs font-medium text-slate-700">
                    <span className="text-blue-600 hover:underline">Drop your resume here</span>, or browse files
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">Supports PDF (Max 5MB)</p>
                </div>

                {/* File Upload Status Card */}
                {uploadedFile && (
                  <div className="mt-3 flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1 bg-emerald-100 rounded text-emerald-600">
                        <CheckCircleIcon className="w-4 h-4" />
                      </div>
                      <div className="text-xs">
                        <p className="font-medium text-slate-800">{uploadedFile.name}</p>
                        <p className="text-[11px] text-slate-400">
                          {uploadedFile.size} • <span className="text-emerald-600 font-medium">{uploadedFile.status}</span>
                        </p>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setUploadedFile(null)}
                      className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button onClick={handleGenerateReport} className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
              Generate Comprehensive Report
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Recently Generated Reports Section */}
        {reports.length > 0 && (
          <div className="mt-8">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Recently Generated Reports</h2>
            <div className="space-y-3">
              {reports.map(report => (
                <div
                  key={report._id}
                  onClick={() => navigate(`/interview/${report._id}`)}
                  className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-50 rounded">
                      <ShieldCheckIcon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-800">{report.title || 'Untitled Report'}</p>
                      <p className="text-sm text-slate-500">
                        {new Date(report.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-slate-400 hover:text-blue-600" />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}