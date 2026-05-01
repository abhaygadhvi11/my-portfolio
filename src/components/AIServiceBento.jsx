import React from 'react';
import { Terminal, Code, Cpu, Server, Check, ArrowRight, Activity } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const AIServiceBento = () => {
    const [ref1, isVisible1] = useScrollReveal(0.3);
    const [ref2, isVisible2] = useScrollReveal(0.3);
    const [ref3, isVisible3] = useScrollReveal(0.3);

    return (
        <div className="w-full mt-16 mb-24">
            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl font-semibold text-[#e8e8e8]">Platform Highlights</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Hero Feature: Centralized API */}
                <div ref={ref1} className="col-span-1 md:col-span-2 rounded-[32px] bg-[#141414] border border-[#2e2e2e] p-8 flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none"></div>
                    
                    <div className="flex-1 flex items-center justify-center min-h-[300px] w-full mb-8 relative">
                        {/* Faux UI: Terminal API Response */}
                        <div className="w-full max-w-lg bg-[#0a0a0a] border border-[#333] rounded-xl p-4 flex flex-col gap-2 relative overflow-hidden shadow-2xl font-mono text-sm">
                            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-[#222]">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <span className="text-[#555] text-xs ml-2">api/v1/generate</span>
                            </div>
                            
                            <div className="text-blue-400">POST <span className="text-[#aaa]">https://ai.service/api/v1/generate</span></div>
                            <div className="text-[#888] flex gap-2">
                                <span>{'{'}</span>
                                <span className="text-emerald-400">"prompt_id"</span>: <span className="text-purple-400">"sys_092"</span>,
                                <span>{'}'}</span>
                            </div>
                            <div className={`text-[#444] mt-2 border-t border-[#222] pt-2 flex items-center gap-2 transition-opacity duration-1000 ${isVisible1 ? 'opacity-100' : 'opacity-0'}`}>
                                <ArrowRight size={14} /> 200 OK (1.2s)
                            </div>
                            <div className={`text-[#aaa] mt-1 pl-4 border-l-2 border-[#333] transition-all duration-1000 delay-300 ${isVisible1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                                <span className="text-emerald-400">"response"</span>: <span className="text-purple-400">"Successfully generated insights..."</span>,<br/>
                                <span className="text-emerald-400">"tokens_used"</span>: <span className="text-blue-400">142</span>
                            </div>
                            
                            {/* Blinking cursor */}
                            <div className="w-2 h-4 bg-[#888] animate-pulse mt-2"></div>
                        </div>
                    </div>

                    <div className="mt-auto relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                            <Terminal className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-2xl font-medium text-[#e8e8e8] mb-3 tracking-tight">Centralized API Gateway</h3>
                        <p className="text-[#888] leading-relaxed text-[15px] max-w-md">
                            A single source of truth for all AI interactions, allowing multiple applications to request generations through a unified, secure endpoint.
                        </p>
                    </div>
                </div>

                {/* Secondary Feature: Reusable Prompts */}
                <div ref={ref2} className="col-span-1 rounded-[32px] bg-[#141414] border border-[#2e2e2e] p-8 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] pointer-events-none"></div>
                    
                    <div className="flex-1 flex flex-col justify-end min-h-[250px] w-full mb-8">
                        {/* Faux UI: Code Blocks */}
                        <div className="w-full bg-[#1a1a1a] border border-[#333] rounded-2xl p-4 shadow-xl flex flex-col gap-3 relative overflow-hidden">
                            <div className={`p-3 rounded-lg bg-[#222] border border-[#333] border-l-4 border-l-emerald-500 transform transition-all duration-700 ease-out ${isVisible2 ? '-translate-y-1 shadow-lg' : 'translate-y-0 shadow-none'}`}>
                                <div className="h-2 w-16 bg-[#444] rounded mb-2"></div>
                                <div className="h-1.5 w-full bg-[#333] rounded mb-1"></div>
                                <div className="h-1.5 w-4/5 bg-[#333] rounded"></div>
                            </div>
                            <div className={`p-3 rounded-lg bg-[#222] border border-[#333] border-l-4 border-l-emerald-500 transform transition-all duration-700 ease-out delay-150 ${isVisible2 ? '-translate-y-1 opacity-100 shadow-lg' : 'translate-y-0 opacity-40 shadow-none'}`}>
                                <div className="h-2 w-20 bg-[#444] rounded mb-2"></div>
                                <div className="h-1.5 w-5/6 bg-[#333] rounded"></div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                            <Code className="text-emerald-400" size={20} />
                        </div>
                        <h3 className="text-xl font-medium text-[#e8e8e8] mb-2 tracking-tight">Reusable Prompts</h3>
                        <p className="text-[#888] leading-relaxed text-[14px]">
                            Store and version control complex prompts globally instead of hardcoding them into clients.
                        </p>
                    </div>
                </div>

                {/* Third Feature: Scalable Infrastructure */}
                <div ref={ref3} className="col-span-1 md:col-span-3 rounded-[32px] bg-[#141414] border border-[#2e2e2e] p-8 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/5 blur-[100px] pointer-events-none"></div>
                    
                    <div className="flex-1 relative z-10 order-2 md:order-1">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                            <Server className="text-purple-400" size={24} />
                        </div>
                        <h3 className="text-2xl font-medium text-[#e8e8e8] mb-3 tracking-tight">Scalable Microservice</h3>
                        <p className="text-[#888] leading-relaxed text-[15px] max-w-xl">
                            Designed to handle concurrent requests efficiently, managing API rate limits and token usage tracking across all connected applications automatically.
                        </p>
                    </div>

                    <div className="flex-1 w-full order-1 md:order-2 flex justify-center md:justify-end">
                        {/* Faux UI: Server Status Chart */}
                        <div className="w-full max-w-[280px] h-[160px] flex items-end justify-between gap-2 p-4 border-b border-[#333]">
                            {[40, 70, 45, 90, 65, 80, 50, 100].map((height, i) => (
                                <div key={i} className={`w-full bg-[#222] rounded-t-sm relative overflow-hidden transition-colors duration-500 ${isVisible3 ? 'bg-[#333]' : ''}`} style={{ height: `${height}%` }}>
                                    <div 
                                        className={`absolute bottom-0 w-full bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-sm transition-all duration-1000 ease-out ${isVisible3 ? 'h-full opacity-100' : 'h-0 opacity-50'}`} 
                                        style={{ transitionDelay: `${isVisible3 ? i * 75 : 0}ms` }}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AIServiceBento;
