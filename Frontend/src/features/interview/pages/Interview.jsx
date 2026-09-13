import React, { useEffect, useState } from 'react';
import {
  AcademicCapIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  CheckCircleIcon,
  LightBulbIcon,
  ExclamationTriangleIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon
} from '@heroicons/react/24/outline';
import { FileDown } from 'lucide-react';
import { Loader } from 'lucide-react';
import { useInterview } from '../hooks/useInterview';
import { useParams, useNavigate } from 'react-router'

export default function CareerReportView() {

  const { report, loading, getReportById, getResumePdf } = useInterview();
  const { interviewId } = useParams()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState('technical');
  const [expandedQuestions, setExpandedQuestions] = useState({});

  const toggleQuestion = (id) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getSeverityStyle = (severity) => {
    switch (severity.toUpperCase()) {
      case 'HIGH':
        return 'bg-rose-50 text-rose-700 border-rose-200/60 ring-rose-500/10';
      case 'MEDIUM':
        return 'bg-amber-50 text-amber-700 border-amber-200/60 ring-amber-500/10';
      case 'LOW':
        return 'bg-sky-50 text-sky-700 border-sky-200/60 ring-sky-500/10';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200/60 ring-slate-500/10';
    }
  };

  useEffect(() => {
    if (interviewId) {
      getReportById(interviewId)
    }
  }, [interviewId])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col justify-between bg-gradient-to-br from-blue-100 via-sky-50 to-emerald-100 text-slate-700 font-sans p-6 sm:p-10 relative overflow-hidden">
        <Loader className="animate-spin w-12 h-12 text-blue-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
    )
  }

  if (!report) return <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Report not found</p>

  return (
    <div className="min-h-screen bg-slate-900/5 p-4 md:p-8 flex flex-col items-center justify-center font-sans text-slate-800 antialiased selection:bg-blue-500 selection:text-white">

      {/* Outer Cohesive Shell Card */}
      <div className="w-full max-w-7xl h-[88vh] bg-white border border-slate-200/80 rounded-3xl shadow-2xl shadow-slate-200/50 flex flex-col overflow-hidden backdrop-blur-xl">

        {/* 3-Panel Connected Layout */}
        <div className="flex-grow flex flex-col md:flex-row overflow-hidden">

          {/* ================= LEFT SECTION (Navigation Pills) ================= */}
          <aside className="w-full md:w-64 border-r border-slate-100 p-6 flex flex-col justify-start bg-slate-50/50 flex-shrink-0 min-h-screen">
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-6">
              Navigation
            </h2>

            {/* Top Navigation Items */}
            <div className="space-y-2.5">
              {/* Tech Pill */}
              <button
                onClick={() => setActiveTab('technical')}
                className={`w-full py-3 px-4 rounded-xl border text-xs font-bold text-left transition-all duration-200 flex items-center justify-between group ${activeTab === 'technical'
                    ? 'border-blue-500/30 bg-blue-500 text-white shadow-lg shadow-blue-500/25 translate-x-1'
                    : 'border-transparent bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <AcademicCapIcon className={`w-4 h-4 transition-colors ${activeTab === 'technical' ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span>Technical</span>
                </div>
                <ChevronRightIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${activeTab === 'technical' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`} />
              </button>

              {/* Behavioral Pill */}
              <button
                onClick={() => setActiveTab('behavioural')}
                className={`w-full py-3 px-4 rounded-xl border text-xs font-bold text-left transition-all duration-200 flex items-center justify-between group ${activeTab === 'behavioural'
                    ? 'border-purple-500/30 bg-purple-600 text-white shadow-lg shadow-purple-500/25 translate-x-1'
                    : 'border-transparent bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <UserGroupIcon className={`w-4 h-4 transition-colors ${activeTab === 'behavioural' ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span>Behavioral</span>
                </div>
                <ChevronRightIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${activeTab === 'behavioural' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`} />
              </button>

              {/* Prep Pill */}
              <button
                onClick={() => setActiveTab('prep')}
                className={`w-full py-3 px-4 rounded-xl border text-xs font-bold text-left transition-all duration-200 flex items-center justify-between group ${activeTab === 'prep'
                    ? 'border-emerald-500/30 bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 translate-x-1'
                    : 'border-transparent bg-transparent text-slate-600 hover:bg-slate-100/80 hover:text-slate-900'
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <CalendarDaysIcon className={`w-4 h-4 transition-colors ${activeTab === 'prep' ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span>Prep Plan</span>
                </div>
                <ChevronRightIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${activeTab === 'prep' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1'}`} />
              </button>
            </div>

            {/* Bottom Action Items */}
            <div className="pt-6 space-y-2.5 border-t border-slate-200/60">
              <button
                onClick={() => getResumePdf(interviewId)}
                className="w-full py-3 px-4 rounded-xl border border-transparent bg-transparent text-xs font-bold text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 text-left transition-all duration-200 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <FileDown className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                  <span>Download Resume</span>
                </div>
              </button>

              <button
                onClick={() => navigate('/home')}
                className="w-full py-3 px-4 rounded-xl border border-transparent bg-transparent text-xs font-bold text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 text-left transition-all duration-200 flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <ChevronLeftIcon className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                  <span>Back</span>
                </div>
              </button>
            </div>
          </aside>

          {/* ================= MIDDLE SECTION (Main Scrollable Content) ================= */}
          <main className="flex-grow p-6 md:p-8 overflow-y-auto bg-white custom-scrollbar">

            {/* TECHNICAL QUESTIONS VIEW */}
            {activeTab === 'technical' && (
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                      <AcademicCapIcon className="w-5 h-5" />
                    </div>
                    Technical Assessment
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 pl-9">Review target technical concepts and strategic answers.</p>
                </div>

                {report.technicalQuestions.map((q, idx) => {
                  const questionId = `tech-${idx}`;

                  const isOpen = !!expandedQuestions[questionId];

                  return (
                    <div
                      key={questionId}
                      className="border border-slate-200/80 rounded-2xl bg-white shadow-sm hover:border-slate-300 transition-colors overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-50 text-blue-600 ring-1 ring-blue-500/20 text-xs font-bold rounded-lg flex items-center justify-center mt-0.5">
                            {idx + 1}
                          </span>

                          <h3 className="text-sm font-semibold text-slate-800 leading-snug">
                            {q.question}
                          </h3>
                        </div>

                        <div className="p-1 text-slate-400 hover:text-slate-600 rounded-lg flex-shrink-0 mt-0.5">
                          {isOpen ? (
                            <ChevronDownIcon className="w-4 h-4 text-blue-600 transition-transform duration-200" />
                          ) : (
                            <ChevronRightIcon className="w-4 h-4 transition-transform duration-200" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 space-y-4 border-t border-slate-100/80 bg-slate-50/30">
                          <div className="bg-amber-50/50 border border-amber-200/60 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2.5">
                            <LightBulbIcon className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />

                            <div className="leading-relaxed">
                              <span className="font-semibold text-amber-900">
                                Intention:
                              </span>

                              <span className="text-amber-800/90">
                                {q.intention}
                              </span>
                            </div>
                          </div>

                          <div className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-3.5 text-xs text-slate-600 leading-relaxed space-y-1">
                            <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                              Answer Framework
                            </p>

                            <p>{q.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* BEHAVIORAL QUESTIONS VIEW */}
            {activeTab === 'behavioural' && (
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600">
                      <UserGroupIcon className="w-5 h-5" />
                    </div>
                    Behavioral Scenarios
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 pl-9">Key situation responses using STAR technique methodology.</p>
                </div>

                {report.behaviouralQuestions.map((q, idx) => {
                  const questionId = `behav-${idx}`;

                  const isOpen = !!expandedQuestions[questionId];

                  return (
                    <div
                      key={questionId}
                      className="border border-slate-200/80 rounded-2xl bg-white shadow-sm hover:border-slate-300 transition-colors overflow-hidden"
                    >
                      <button
                        onClick={() => toggleQuestion(questionId)}
                        className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-slate-50/50 transition-colors cursor-pointer"
                      >
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-purple-50 text-purple-600 ring-1 ring-purple-500/20 text-xs font-bold rounded-lg flex items-center justify-center mt-0.5">
                            {idx + 1}
                          </span>

                          <h3 className="text-sm font-semibold text-slate-800 leading-snug">
                            {q.question}
                          </h3>
                        </div>

                        <div className="p-1 text-slate-400 hover:text-slate-600 rounded-lg flex-shrink-0 mt-0.5">
                          {isOpen ? (
                            <ChevronDownIcon className="w-4 h-4 text-purple-600 transition-transform duration-200" />
                          ) : (
                            <ChevronRightIcon className="w-4 h-4 transition-transform duration-200" />
                          )}
                        </div>
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-1 space-y-4 border-t border-slate-100/80 bg-slate-50/30">
                          <div className="bg-purple-50/40 border border-purple-200/60 rounded-xl p-3 text-xs text-purple-900 flex items-start gap-2.5">
                            <LightBulbIcon className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />

                            <div className="leading-relaxed">
                              <span className="font-semibold text-purple-900">
                                Intention:
                              </span>

                              <span className="text-purple-800/90">
                                {q.intention}
                              </span>
                            </div>
                          </div>

                          <div className="bg-slate-50/80 border border-slate-200/60 rounded-xl p-3.5 text-xs text-slate-600 leading-relaxed space-y-1">
                            <p className="font-bold text-slate-400 uppercase tracking-wider text-[10px]">
                              STAR Strategy
                            </p>

                            <p>{q.answer}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* PREPARATION PLAN VIEW (WITH TIMELINE) */}
            {activeTab === 'prep' && (
              <div className="space-y-6 max-w-4xl mx-auto">
                <div className="border-b border-slate-100 pb-4">
                  <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                      <CalendarDaysIcon className="w-5 h-5" />
                    </div>
                    {report.prepPlan.length}-Days Roadmap
                  </h2>
                  <p className="text-xs text-slate-500 mt-1 pl-9">Follow this step-by-step checklist to maximize readiness.</p>
                </div>

                {/* Timeline Container */}
                <div className="relative pl-6 md:pl-8 space-y-6 before:absolute before:left-3 md:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-slate-200/80">
                  {report.prepPlan.map((plan, index) => {
                    const isLast = index === report.prepPlan.length - 1;
                    return (
                      <div key={plan.day} className="relative group">

                        {/* Timeline Node Badge */}
                        <div className="absolute -left-6 md:-left-8 top-1.5 flex items-center justify-center">
                          <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold flex items-center justify-center ring-4 ring-white shadow-sm transition-transform duration-200 group-hover:scale-110">
                            {plan.day}
                          </span>
                        </div>

                        {/* Card Content */}
                        <div className="border border-slate-200/80 rounded-2xl p-4.5 bg-white shadow-sm hover:border-slate-300 transition-all duration-200">
                          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                            <div className="flex items-center gap-2.5">
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                                Day {plan.day}
                              </span>
                              <h3 className="text-sm font-semibold text-slate-800">{plan.focus}</h3>
                            </div>
                            {isLast && (
                              <span className="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200/60">
                                Final Step
                              </span>
                            )}
                          </div>

                          <ul className="space-y-2">
                            {plan.tasks.map((task, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2.5 text-xs text-slate-600 leading-relaxed">
                                <CheckCircleIcon className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span>{task}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </main>

          {/* ================= RIGHT SECTION (Score Circle & Skill List) ================= */}
          <aside className="w-full md:w-80 border-l border-slate-100 p-6 flex flex-col gap-6 bg-slate-50/50 overflow-y-auto flex-shrink-0">

            {/* Score Section Circle */}
            <div className="flex flex-col items-center justify-center pt-2">
              <div className="relative group flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 p-1 shadow-xl shadow-blue-500/10">
                  <div className="w-full h-full rounded-full bg-white flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight">{report.matchScore}%</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">Match Score</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Skill Gaps Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Skill Gaps
                </h3>
                <ExclamationTriangleIcon className="w-4 h-4 text-amber-500" />
              </div>

              <div className="space-y-2">
                {report.skillGap.map((gap, idx) => (
                  <div
                    key={idx}
                    className="w-full p-3 border border-slate-200/80 rounded-xl bg-white flex items-center justify-between px-3.5 shadow-sm hover:border-slate-300 transition-colors"
                  >
                    <span className="text-xs font-semibold text-slate-700 truncate mr-2">{gap.skill}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ring-1 ${getSeverityStyle(gap.severity)}`}>
                      {gap.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}