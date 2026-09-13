import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  FileText,
  Target,
  Cpu,
  Zap,
  TrendingUp,
  Users,
  ShieldCheck,
  BarChart3,
  AlertCircle,
  Layers,
  Check,
  Lock,
  Headphones,
  Clock,
  Menu,
  X,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMockTab, setActiveMockTab] = useState('readiness');
  const [jobTitleInput, setJobTitleInput] = useState('Staff Backend Engineer - Distributed Systems');
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-blue-500 selection:text-white">
      
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-md shadow-blue-500/20">
              <Layers className="w-5 h-5 stroke-[2.5]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Career<span className="text-blue-600">AI</span>
            </span>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
            <a href="#how-it-works" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">How it Works</a>
            <a href="#comparison" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Comparison</a>
            <div className="h-4 w-px bg-slate-200 mx-1" />
            <button onClick={() => navigate('/login')} className="text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors px-3 py-2">
              Log In
            </button>
            <button onClick={() => navigate('/register')} className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-200 flex items-center gap-1.5 active:scale-95">
              <span>Register</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3">
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700">Features</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700">How it Works</a>
            <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-700">Comparison</a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button onClick={() => navigate('/login')} className="w-full py-2.5 text-center font-semibold text-slate-700 border border-slate-200 rounded-xl">Log In</button>
              <button onClick={() => navigate('/register')} className="w-full py-2.5 text-center font-semibold text-white bg-blue-600 rounded-xl shadow-md">Register</button>
            </div>
          </div>
        )}
      </header>

      { }
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden bg-gradient-to-b from-slate-50/70 via-white to-white">
        {/* Subtle Background Accent Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-200/30 via-purple-200/20 to-pink-200/20 blur-3xl rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/70 text-blue-700 text-xs font-semibold mb-6 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>AI-DRIVEN RESUME & INTERVIEW PREP PLATFORM • OVER 45,000+ USERS</span>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Close the Skill Gap. Master the Interview.{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              Generate a Tailored Tech Resume.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Upload your resume, paste the target job description, and get precise match scores, deep AI-driven gap analysis, role-specific interview readiness, and an ATS-optimized, job-aligned tailored resume in 15 seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button onClick={() => navigate('/register')} className="w-full sm:w-auto px-7 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-xl shadow-blue-600/25 transition-all duration-200 flex items-center justify-center gap-2 group active:scale-95">
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button onClick={() => navigate('/register')} className="w-full sm:w-auto px-7 py-3.5 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-sm">
              <span>Analyze My Readiness</span>
            </button>
          </div>

          {/* Micro Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 text-xs font-semibold uppercase tracking-wider">
            <span className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-slate-400" />
              NO CREDIT CARD REQUIRED
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              CANCEL ANYTIME
            </span>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="flex items-center gap-1.5">
              <Headphones className="w-3.5 h-3.5 text-slate-400" />
              24/7 SUPPORT AVAILABLE
            </span>
          </div>

          { }
          <div className="mt-14 max-w-5xl mx-auto">
            <div className="bg-slate-900/5 p-2 rounded-2xl md:rounded-3xl backdrop-blur-sm border border-slate-200/80 shadow-2xl shadow-blue-900/10">
              <div className="bg-white rounded-xl md:rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm text-left">

                {/* Mock Browser Header */}
                <div className="bg-slate-50 px-4 py-3 border-b border-slate-200/70 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-400 inline-block" />
                  </div>

                  {/* Tabs */}
                  <div className="hidden sm:flex items-center gap-1 bg-slate-200/60 p-1 rounded-lg text-xs font-semibold text-slate-600">
                    <button
                      onClick={() => setActiveMockTab('input')}
                      className={`px-3 py-1 rounded-md transition-all ${activeMockTab === 'input' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'}`}
                    >
                      1. Input Details
                    </button>
                    <button
                      onClick={() => setActiveMockTab('readiness')}
                      className={`px-3 py-1 rounded-md transition-all ${activeMockTab === 'readiness' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'}`}
                    >
                      2. Readiness Report & Score
                    </button>
                    <button
                      onClick={() => setActiveMockTab('resume')}
                      className={`px-3 py-1 rounded-md transition-all ${activeMockTab === 'resume' ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'}`}
                    >
                      3. Tailored ATS Resume
                    </button>
                  </div>

                  <div className="text-[11px] font-mono text-slate-400">careerai.app/readiness-report</div>
                </div>

                {/* Mock Canvas Content (3 Columns) */}
                <div className="p-4 sm:p-6 bg-slate-50/40 grid grid-cols-1 lg:grid-cols-12 gap-5">

                  {/* Left Column: Input Panel */}
                  <div className="lg:col-span-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">1. Upload Resume</span>
                        <span className="text-[10px] bg-green-50 text-green-700 px-2 py-0.5 rounded font-medium border border-green-200">Parsed PDF</span>
                      </div>

                      <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-lg flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                          PDF
                        </div>
                        <div className="truncate">
                          <p className="text-xs font-bold text-slate-800 truncate">Senior_Backend_Resume_2025.pdf</p>
                          <p className="text-[10px] text-slate-400">5+ YOE • Java, Go, Distributed Systems</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">2. Target Job Description</label>
                      <textarea
                        readOnly
                        value={jobTitleInput}
                        onChange={(e) => setJobTitleInput(e.target.value)}
                        className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg p-2.5 text-slate-700 h-20 resize-none font-medium focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>

                    <div className="pt-1">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">3. Self Description & Focus</span>
                      <div className="p-2.5 bg-slate-50 border border-slate-200/80 rounded-lg text-[11px] text-slate-600 font-normal">
                        "7+ yrs software engineer. Focused on Kafka streams, Kubernetes, microservice migration, and low-latency system design."
                      </div>
                    </div>
                  </div>

                  {/* Center Column: Readiness Score Radial Gauge */}
                  <div className="lg:col-span-4 bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex flex-col items-center justify-center text-center">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Readiness & Skill Score</span>

                    {/* Radial Score Gauge */}
                    <div className="relative w-36 h-36 flex items-center justify-center my-2">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          className="text-slate-100"
                          strokeWidth="3.5"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                        <path
                          className="text-blue-600"
                          strokeDasharray="88, 100"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          stroke="currentColor"
                          fill="none"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        />
                      </svg>
                      <div className="absolute flex flex-col items-center justify-center">
                        <span className="text-3xl font-extrabold text-slate-900 tracking-tight">88%</span>
                        <span className="text-[10px] font-bold text-green-600 uppercase tracking-wide">Strong Match</span>
                      </div>
                    </div>

                    {/* Breakdown bars */}
                    <div className="w-full space-y-2 mt-4 text-left">
                      <div>
                        <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                          <span>Hard Skills Alignment</span>
                          <span className="text-blue-600 font-bold">92%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full w-[92%]" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] font-semibold text-slate-600 mb-1">
                          <span>ATS Keyword Density</span>
                          <span className="text-purple-600 font-bold">84%</span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-600 rounded-full w-[84%]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Skill Gaps & Action Items */}
                  <div className="lg:col-span-4 bg-white p-4 rounded-xl border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Identified Skill Gaps</span>
                        <span className="text-[10px] bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold border border-amber-200">3 Priority Items</span>
                      </div>

                      <div className="space-y-2">
                        <div className="p-2.5 rounded-lg bg-red-50/60 border border-red-100 flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-slate-800">System Design: Event-Driven Arch</p>
                            <p className="text-[10px] text-slate-500">Missing explicitly defined high-throughput Kafka streaming patterns.</p>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-amber-50/60 border border-amber-100 flex items-start gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-500 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-bold text-slate-800">Kubernetes & Helm Deployment</p>
                            <p className="text-[10px] text-slate-500">Target JD requests hands-on cluster setup, resume only mentions Docker.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">Tailored Action Steps</span>
                      <div className="p-2.5 bg-blue-50/50 border border-blue-100 rounded-lg text-xs space-y-1.5">
                        <div className="flex items-center gap-2 text-blue-900 font-medium text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <span>Generated ATS bullet points with metric metrics</span>
                        </div>
                        <div className="flex items-center gap-2 text-blue-900 font-medium text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                          <span>Created 12 target system design interview Q&As</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      { }
      <section className="py-12 border-y border-slate-100 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">

            {/* Metric 1 */}
            <div className="text-center pt-4 lg:pt-0 lg:px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">88%</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Avg Match Score Improvement</div>
            </div>

            {/* Metric 2 */}
            <div className="text-center pt-4 lg:pt-0 lg:px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">15 Sec</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Instant Deep Audit Turnaround</div>
            </div>

            {/* Metric 3 */}
            <div className="text-center pt-4 lg:pt-0 lg:px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">3.4x</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Higher Screen Conversion</div>
            </div>

            {/* Metric 4 */}
            <div className="text-center pt-4 lg:pt-0 lg:px-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 tracking-tight">45,000+</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">Offers at Stripe, Google & Meta</div>
            </div>

          </div>
        </div>
      </section>

      { }
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              CORE CAPABILITY #1
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
              Deep Readiness & Skill Gap Analysis
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We combine your resume, target job description, and personal self-description to run deep match audits against real hiring rubrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Feature Card 1 */}
            <div className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center mb-6 shadow-sm">
                  <BarChart3 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Match Score & ATS Benchmark
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Real-time scoring benchmarked against Applicant Tracking Systems (Workday, Greenhouse, Lever). Understand exact keyword density, formatting health, and skill gap percentages.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Hard Skills • 8 Keywords</span>
                <span className="text-blue-600 font-semibold">92% Match Rate</span>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-500/5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-100/80 text-purple-600 flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Prioritized Skill Gap Breakdown
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Clear segmentation of missing competencies across Technical Basics, Architectural Patterns, and Behavioral Leadership, tagged by urgency (High, Medium, Low).
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 font-medium border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span>Technical: Event-Driven Architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Architectural: Multi-region failover handling</span>
                </li>
              </ul>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-slate-50/70 rounded-2xl p-7 border border-slate-200/80 hover:border-green-200 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-green-100/80 text-green-700 flex items-center justify-center mb-6 shadow-sm">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Predictive Questions & Intent
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Data-driven inquiry revealing what interviewers are secretely testing for. Synthesized from 20,000+ real-world interview rounds at top tech companies.
                </p>
              </div>

              <ul className="space-y-2 text-xs text-slate-700 font-medium border-t border-slate-200/60 pt-4">
                <li className="flex items-center gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>System Design: Rubric & Scenarios</span>
                </li>
                <li className="flex items-center gap-2 text-slate-600">
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                  <span>Behavioral: Amazon Leadership Leadership</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      { }
      <section id="comparison" className="py-20 md:py-28 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-widest bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              CORE CAPABILITY #2
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
              Generate a Resume That Perfectly Matches the Target Job
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Bridge your identified skill gaps automatically. Our engine reframes bullet points using the STAR framework, incorporates missing keywords, and produces ATS-optimized (PDF/DOCX) resumes aligned with your authentic experience.
            </p>
          </div>

          {/* Side-by-Side Resume Comparison Box */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

            {/* Left Box: Before */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">BEFORE: GENERIC UNALIGNED RESUME</span>
                  </div>
                  <span className="bg-red-50 text-red-600 text-xs font-bold px-3 py-1 rounded-full border border-red-100">
                    Match Score: 48%
                  </span>
                </div>

                <div className="space-y-4 text-left">
                  <div className="mb-4">
                    <h4 className="text-base font-bold text-slate-800">Senior Backend Engineer</h4>
                    <p className="text-xs text-slate-400">Fintech Platform Inc. • 2021 – Present</p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs text-slate-600 leading-relaxed">
                    "Was responsible for maintaining backend services and written Python microservices for the core payment processing pipeline."
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/70 text-xs text-slate-600 leading-relaxed">
                    "Worked on system scale issues and tried to make the database queries faster to reduce lag during rush hours."
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-600 font-medium">
                  <AlertCircle className="w-4 h-4" /> 7 Framework Metrics Missing
                </span>
                <span>Pushed to generic stack recruiter pile</span>
              </div>
            </div>

            {/* Right Box: After */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-blue-500 shadow-xl shadow-blue-500/10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 text-white text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                ATS-OPTIMIZED & ATS-READY (92%)
              </div>

              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-900">AFTER: CAREERAI TAILORED RESUME</span>
                  </div>
                  <span className="bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full border border-green-200">
                    Match Score: 92% (+44%)
                  </span>
                </div>

                <div className="space-y-4 text-left">
                  <div className="mb-4">
                    <h4 className="text-base font-bold text-slate-900">Staff Backend Engineer — Distributed Infrastructure</h4>
                    <p className="text-xs text-slate-500">Fintech Platform Inc. • 2021 – Present</p>
                  </div>

                  <div className="p-3.5 bg-blue-50/40 rounded-xl border border-blue-100 text-xs text-slate-800 leading-relaxed">
                    "Architected high-throughput Go microservices process pipeline handling <strong className="text-blue-700 bg-blue-100/80 px-1 rounded">50,000+ QPS</strong> under SLA zero-downtime constraints, leveraging <strong className="text-blue-700 bg-blue-100/80 px-1 rounded">Kafka</strong> for event-driven failover mechanisms."
                  </div>

                  <div className="p-3.5 bg-blue-50/40 rounded-xl border border-blue-100 text-xs text-slate-800 leading-relaxed">
                    "Spearheaded enterprise Kafka cluster migration sync, reducing <strong className="text-blue-700 bg-blue-100/80 px-1 rounded">125ms p99 latency</strong> bottleneck down to 14ms and enabling 99.999% SLA compliance."
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-green-600 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> 100% Authentic to User Background
                </span>
                <div className="flex gap-2">
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono text-[10px]">PDF</span>
                  <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-mono text-[10px]">DOCX</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      { }
      <section id="how-it-works" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              WORKFLOW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-4 mb-4">
              How CareerAI Transforms Your Search in 3 Steps
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              From cold application to confident offer negotiation in three streamlined phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {/* Step 1 */}
            <div className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200/80 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-extrabold text-blue-600">01</span>
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Input & Upload
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Upload your existing resume, paste the target job description, and add your personal self-description (projects, achievements, career goals).
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Time: ~15 seconds</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200/80 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-extrabold text-purple-600">02</span>
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Discover Gaps & Metrics
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  Review your 360-degree readiness report. Inspect your match score, prioritize high-readiness technical interview topics, and position predicted interview questions.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Output: Interactive Gap Matrix</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50/80 rounded-2xl p-8 border border-slate-200/80 relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-3xl font-extrabold text-green-600">03</span>
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Generate & Land
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  One-click tailored resume generation aligned with your target role gaps with quantitative STAR achievements. Export to ATS-compliant PDF/DOCX and apply.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Result: 3.4x Interview Rate</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      { }
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 sm:p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
            {/* Background pattern details */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold mb-6 text-white border border-white/20">
                <RocketIcon className="w-3.5 h-3.5" />
                <span>READY FOR YOUR NEXT CAREER LEAP?</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Audit Your Profile & Generate Your Tailored Resume Today
              </h2>

              <p className="text-blue-100 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Join over 45,000 engineers who stopped sending generic resumes and started landing top-tier tech compensation packages.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button onClick={() => navigate('/register')} className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 hover:bg-slate-50 font-extrabold text-sm rounded-xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 group">
                  <span>Start Free Evaluation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

              <p className="text-blue-200/80 text-xs font-medium mt-6">
                No credit card required • Instant report generation in 15 seconds
              </p>
            </div>
          </div>

        </div>
      </section>

      { }
      <footer className="bg-slate-50 border-t border-slate-200/80 py-12 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Left Copyright */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                C
              </div>
              <span className="font-bold text-slate-800">CareerAI</span>
              <span>© 2026 CareerAI Inc. All rights reserved.</span>
            </div>

            {/* Navigation links */}
            <div className="flex flex-wrap items-center justify-center gap-6 font-medium">
              <a href="#" className="hover:text-slate-900 transition-colors">PRIVACY POLICY</a>
              <a href="#" className="hover:text-slate-900 transition-colors">TERMS OF SERVICE</a>
              <a href="#" className="hover:text-slate-900 transition-colors">SECURITY & DOCS</a>
              <a href="#" className="hover:text-slate-900 transition-colors flex items-center gap-1">
                <span>ATS RECRUITER SOLUTIONS</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

// Inline Helper Icon Component
function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.71 1.1-1.41 1.25-2.02S8 16.14 8.5 15.5l7-7a2.5 2.5 0 0 0 0-3.5l-1-1a2.5 2.5 0 0 0-3.5 0l-7 7c-.64.5-1.02.75-1.48 1.02s-1.31.54-2.02 1.25z" />
      <path d="M15 5l4 4" />
    </svg>
  );
}