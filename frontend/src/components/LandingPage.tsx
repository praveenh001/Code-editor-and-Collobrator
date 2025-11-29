// LandingPage.tsx - COMPLETE CODE WITH UPDATED FOOTER
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import {
  Code,
  Users,
  Zap,
  Play,
  ArrowRight,
  Github,
  Linkedin,
  Download,
  Star
} from 'lucide-react';

const LandingPage: React.FC = () => {
  const [showFeatures, setShowFeatures] = useState(false);
  

  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowFeatures(true), 300);
    const timer2 = setTimeout(() => setShowStats(true), 600);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/room');
  };


  const BackgroundWithOverlay = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_0%,transparent_75%,rgba(103,232,249,0.1)_75%,rgba(103,232,249,0.1)_100%),linear-gradient(150deg,transparent_0%,transparent_75%,rgba(59,130,246,0.1)_75%,rgba(59,130,246,0.1)_100%)] bg-[size:60px_60px]"></div>
      </div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 20}s`
            }}
          />
        ))}
      </div>
      <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-orb-float-1"></div>
      <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-orb-float-2"></div>
      <div className="absolute top-1/3 -left-20 w-60 h-60 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-orb-float-3"></div>
      <div className="absolute bottom-1/3 -right-20 w-60 h-60 bg-gradient-to-r from-green-500/15 to-cyan-500/15 rounded-full blur-3xl animate-orb-float-4"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_50%)] bg-[size:100%_4px] opacity-30"></div>
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.3)_70%)"></div>
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(103,232,249,0.1)_50%,transparent_100%)] animate-scan"></div>
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent animate-scan-line"></div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-20"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(103,232,249,0.3)_24px,rgba(103,232,249,0.3)_25px,transparent_25px),linear-gradient(0deg,transparent_24px,rgba(59,130,246,0.3)_24px,rgba(59,130,246,0.3)_25px,transparent_25px)] bg-[size:50px_50px]"></div>
      </div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,rgba(103,232,249,0.1)_0%,rgba(59,130,246,0.1)_25%,rgba(147,51,234,0.1)_50%,rgba(103,232,249,0.1)_75%,rgba(59,130,246,0.1)_100%)] [mask-image:radial-gradient(circle_at_center,transparent_20%,black_70%)]"></div>
      </div>
    </div>
  );

  const CollaborativeLogo = () => (
    <div className="flex items-center justify-center py-6 relative z-20">
      <div className="flex items-center space-x-4 bg-gradient-to-r from-gray-800/80 to-slate-800/80 backdrop-blur-xl rounded-2xl px-8 py-4 border border-gray-600/30 shadow-2xl">
        <div className="relative">
          <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-500">
            <div className="relative">
              <Code className="w-8 h-8 text-white" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-lg"></div>
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-blue-400/50 rounded-bl-lg"></div>
        </div>
        <div className="text-left">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            CodeSync
          </h1>
          <p className="text-xs text-gray-400 font-medium tracking-wider">
            COLLABORATIVE CODING
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen relative">
      <BackgroundWithOverlay />

      <nav className="relative z-50">
        <CollaborativeLogo />
      </nav>

      <section className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 text-sm font-semibold">
                🚀 Real-time Collaboration
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Code Together,
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Live.
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-lg">
                Transform your coding sessions with real-time collaboration.
                Write, execute, and debug code together - instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGetStarted}
                  className="group flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3"
                >
                  <Play className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Start Coding Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={scrollToFeatures}
                  className="flex-1 bg-gray-800/50 hover:bg-gray-700/80 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-gray-600/50 backdrop-blur-sm flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5" />
                  View Features
                </button>
              </div>

              <div className={`grid grid-cols-3 gap-8 transition-all duration-700 ${showStats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    50K+
                  </div>
                  <div className="text-gray-400 text-sm">Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-gray-400 text-sm">Rooms Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-gradient-to-br from-gray-800/90 to-slate-800/90 backdrop-blur-xl rounded-3xl p-8 border border-cyan-500/20 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-sm text-gray-400 ml-2">index.js</span>
                  </div>
                  <div className="h-64 bg-gray-900 rounded-xl p-4 font-mono text-green-400 text-sm overflow-hidden">
                    <div className="space-y-1">
                      <div className="flex"><span className="w-6 text-gray-500">1 </span><span>const app = () =&gt;</span></div>
                      <div className="flex"><span className="w-6 text-gray-500">2 </span><span className="text-cyan-400">  useRealtimeSync();</span></div>
                      <div className="flex"><span className="w-6 text-gray-500">3 </span><span className="text-purple-400">  collaborateLive();</span></div>
                      <div className="flex"><span className="w-6 text-gray-500">4 </span><span className="text-yellow-400">  executeCode();</span></div>
                      <div className="flex"><span className="w-6 text-gray-500">5 </span><span className="text-green-400">  return &lt;CodeSync /&gt;;</span></div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-green-400 rounded-full animate-pulse border-2 border-green-400/50"></div>
                  <div className="absolute top-1/2 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse border-2 border-blue-400/50"></div>
                  <div className="absolute -bottom-2 right-4 w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse border-2 border-purple-400/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative z-10 py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Powerful features built for seamless team collaboration
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-all duration-700 ${showFeatures ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="group bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multi-User Sync</h3>
              <p className="text-gray-400 mb-6">See everyone's cursor and changes in real-time. No more merge conflicts.</p>
              <div className="flex items-center text-cyan-400 font-semibold">
                <Star className="w-4 h-4 mr-2" /> Live Collaboration
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Instant Execution</h3>
              <p className="text-gray-400 mb-6">Run code directly in the browser. See results instantly for all users.</p>
              <div className="flex items-center text-emerald-400 font-semibold">
                <Play className="w-4 h-4 mr-2" /> Live Preview
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/50 to-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">File Management</h3>
              <p className="text-gray-400 mb-6">Organize projects with folders, create files, and collaborate on entire codebases.</p>
              <div className="flex items-center text-purple-400 font-semibold">
                <Download className="w-4 h-4 mr-2" /> Full IDE
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Ready to Code Together?
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing projects in real-time.
          </p>
          <button
            onClick={handleGetStarted}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-12 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-3 mx-auto text-lg"
          >
            <Play className="w-6 h-6" />
            Launch CodeSync
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* ====================================== */}
      {/* UPDATED FOOTER - WITH "Developed by Praveen H" */}
      {/* ====================================== */}
      <footer className="relative z-10 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left - Brand + Copyright */}
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded flex items-center justify-center">
                <Code className="w-3 h-3 text-white" />
              </div>
              <span className="text-gray-400">CodeSync © 2025</span>
            </div>

            {/* Center - Developed By (NEW!) */}
            <div className="text-center">
              <span className="text-cyan-400 text-sm font-semibold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Developed by Praveen H
              </span>
            </div>

            {/* Right - Social Links */}
            <div className="flex items-center space-x-6">
              <a href="https://github.com/praveenh001" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#https://www.linkedin.com/in/praveenhgmit/" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        @keyframes orb-float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -15px) rotate(5deg); }
          50% { transform: translate(-10px, 10px) rotate(-3deg); }
          75% { transform: translate(15px, 5px) rotate(2deg); }
        }
        @keyframes orb-float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(-15px, 20px) rotate(-5deg); }
          50% { transform: translate(10px, -10px) rotate(3deg); }
          75% { transform: translate(-20px, -5px) rotate(-2deg); }
        }
        @keyframes orb-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, -15px) scale(1.1); }
        }
        @keyframes orb-float-4 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, 25px) scale(1.05); }
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-orb-float-1 { animation: orb-float-1 25s ease-in-out infinite; }
        .animate-orb-float-2 { animation: orb-float-2 30s ease-in-out infinite; }
        .animate-orb-float-3 { animation: orb-float-3 35s ease-in-out infinite; }
        .animate-orb-float-4 { animation: orb-float-4 40s ease-in-out infinite; }
        .animate-scan { animation: scan 8s linear infinite; }
        .animate-scan-line { animation: scan-line 4s linear infinite; }
      `}</style>
    </div>
  );
};

export default LandingPage;