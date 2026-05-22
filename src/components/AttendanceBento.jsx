import React from 'react';
import { Camera, Users, ShieldCheck, Activity, Eye, Zap, Database, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AttendanceBento = () => {
    const [ref1, isVisible1] = useScrollReveal(0.3);
    const [ref2, isVisible2] = useScrollReveal(0.3);
    const [ref3, isVisible3] = useScrollReveal(0.3);

    return (
        <div className="w-full mt-16 mb-24">
            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl font-semibold text-[#e8e8e8]">System Highlights</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Hero Feature: Facial Recognition Pipeline */}
                <div ref={ref1} className="col-span-1 md:col-span-2 rounded-2xl bg-[#141414] border border-[#2e2e2e] p-8 flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none"></div>

                    <div className="flex-1 flex items-center justify-center min-h-[300px] w-full mb-8 relative">
                        {/* Faux UI: Face Scan Bounding Box */}
                        <div className={`w-full max-w-sm aspect-video bg-[#1a1a1a] border border-[#333] rounded-2xl p-4 flex items-center justify-center relative overflow-hidden shadow-2xl transition-all duration-1000 ease-out ${isVisible1 ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}>
                            {/* Scanning Grid Background */}
                            <div className="absolute inset-0 bg-[#0a0a0a] bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>

                            {/* Bounding Box Container */}
                            <div className={`relative w-32 h-32 border-2 border-blue-500/50 rounded-xl flex items-center justify-center transition-all duration-700 delay-300 ${isVisible1 ? 'scale-100' : 'scale-50 opacity-0'}`}>
                                {/* Corners */}
                                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-400"></div>
                                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-400"></div>
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-400"></div>
                                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-400"></div>

                                <Camera size={48} className="text-blue-500/30" />

                                {/* Scanning Line */}
                                {isVisible1 && <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400 shadow-[0_0_8px_2px_rgba(59,130,246,0.5)] animate-[scan_2s_ease-in-out_infinite]"></div>}
                            </div>

                            {/* Floating Stats */}
                            <div className={`absolute bottom-4 left-4 bg-[#111] border border-[#333] px-3 py-1.5 rounded-lg flex items-center gap-2 transition-all duration-500 delay-700 ${isVisible1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                <span className="text-[10px] text-emerald-400 font-mono">MATCH: 99.8%</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                            <Eye className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-2xl font-medium text-[#e8e8e8] mb-3 tracking-tight">Real-Time Facial Recognition</h3>
                        <p className="text-[#888] leading-relaxed text-[15px] max-w-md">
                            Engineered a high-performance computer vision pipeline using OpenCV to accurately identify individuals instantly as they walk by.
                        </p>
                    </div>
                </div>

                {/* Secondary Feature: Instant Logging */}
                <div ref={ref2} className="col-span-1 rounded-2xl bg-[#141414] border border-[#2e2e2e] p-8 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] pointer-events-none"></div>

                    <div className="flex-1 flex flex-col justify-end min-h-[250px] w-full mb-8">
                        {/* Faux UI: Live Logs */}
                        <div className={`w-full bg-[#1a1a1a] border border-[#333] rounded-2xl p-4 shadow-xl flex flex-col gap-3 relative overflow-hidden transition-all duration-700 ${isVisible2 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#1a1a1a] z-10"></div>

                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`flex items-center justify-between p-2 rounded-lg bg-[#222] border border-[#2a2a2a] transform transition-all duration-500 ${isVisible2 ? (i === 1 ? 'opacity-100 scale-100' : 'opacity-40 scale-95') : 'opacity-0 scale-90'}`} style={{ transitionDelay: `${isVisible2 ? i * 150 : 0}ms` }}>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center">
                                            <Users size={14} className="text-[#888]" />
                                        </div>
                                        <div>
                                            <div className="w-16 h-2 bg-[#444] rounded-full mb-2"></div>
                                            <div className="w-10 h-1.5 bg-[#333] rounded-full"></div>
                                        </div>
                                    </div>
                                    <span className="text-[10px] text-emerald-400 font-mono">09:{50 + i} AM</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                            <Clock className="text-emerald-400" size={20} />
                        </div>
                        <h3 className="text-xl font-medium text-[#e8e8e8] mb-2 tracking-tight">Instant Logging</h3>
                        <p className="text-[#888] leading-relaxed text-[14px]">
                            Arrivals are securely logged to the database within milliseconds via FastAPI.
                        </p>
                    </div>
                </div>

                {/* Third Feature: Fraud Prevention */}
                <div ref={ref3} className="col-span-1 md:col-span-3 rounded-2xl bg-[#141414] border border-[#2e2e2e] p-8 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/5 blur-[100px] pointer-events-none"></div>

                    <div className="flex-1 relative z-10 order-2 md:order-1">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                            <ShieldCheck className="text-purple-400" size={24} />
                        </div>
                        <h3 className="text-2xl font-medium text-[#e8e8e8] mb-3 tracking-tight">Buddy Punching Prevention</h3>
                        <p className="text-[#888] leading-relaxed text-[15px] max-w-xl">
                            By binding attendance directly to biometrics rather than ID cards or passwords, the system eliminates fraudulent check-ins entirely.
                        </p>
                    </div>

                    <div className="flex-1 w-full order-1 md:order-2 flex justify-center md:justify-end">
                        {/* Faux UI: Secure Verification Graphic */}
                        <div className={`w-full max-w-[280px] aspect-square rounded-full border-[8px] border-[#222] relative flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.5)] transition-transform duration-1000 ${isVisible3 ? 'scale-100' : 'scale-75 opacity-50'}`}>
                            <div className={`absolute inset-0 rounded-full border-[8px] border-purple-500/30 border-t-purple-500 transform transition-all duration-[2000ms] ease-out ${isVisible3 ? 'rotate-[225deg]' : 'rotate-45'}`}></div>
                            <div className="w-24 h-24 rounded-full bg-[#1a1a1a] border border-[#333] flex items-center justify-center z-10 shadow-inner">
                                <Database size={32} className="text-purple-400" />
                            </div>

                            {/* Connection Lines */}
                            <div className={`absolute -left-8 w-16 h-[2px] bg-gradient-to-r from-transparent to-purple-500/50 transition-transform duration-700 delay-500 ${isVisible3 ? 'scale-x-100 origin-right' : 'scale-x-0 origin-right'}`}></div>
                            <div className={`absolute -right-8 w-16 h-[2px] bg-gradient-to-l from-transparent to-purple-500/50 transition-transform duration-700 delay-500 ${isVisible3 ? 'scale-x-100 origin-left' : 'scale-x-0 origin-left'}`}></div>
                        </div>
                    </div>
                </div>

            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { top: 0; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    );
};

export default AttendanceBento;
