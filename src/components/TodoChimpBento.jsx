import React from 'react';
import { CheckCircle2, CircleDashed, Users, BarChart3, TrendingUp, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TodoChimpBento = () => {
    const [ref1, isVisible1] = useScrollReveal(0.3);
    const [ref2, isVisible2] = useScrollReveal(0.3);
    const [ref3, isVisible3] = useScrollReveal(0.3);

    return (
        <div className="w-full mt-16 mb-8">
            <h3 className="text-[28px] font-semibold text-[#e8e8e8] mb-8 tracking-tight">Project Highlights</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* 1. Activity History (Spans 2 columns) */}
                <div ref={ref1} className="md:col-span-2 rounded-2xl bg-[#1a1a1a] border border-[#2e2e2e] p-8 md:p-10 relative overflow-hidden flex flex-col justify-between min-h-[360px] transition-colors duration-300 hover:border-[#444] hover:bg-[#1c1c1c]">
                    <div className="mb-8 relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-[#252525] rounded-full text-xs text-[#aaa] font-medium tracking-wide mb-4 border border-[#333]">
                            Action Panel
                        </span>
                        <h4 className="text-[24px] font-medium text-[#ECE8DF] mb-3">Unified Activity History</h4>
                        <p className="text-[#888] text-[15px] leading-relaxed max-w-md">
                            Get a complete view of every task update in one place—no scattered data, no guesswork. Build focused, effective action plans.
                        </p>
                    </div>

                    {/* Faux UI Graphic: Activity Log */}
                    <div className={`mt-auto bg-[#141414] rounded-t-2xl border border-[#333] border-b-0 p-6 w-[95%] shadow-2xl transform transition-transform duration-700 ease-out ${isVisible1 ? 'translate-y-4' : 'translate-y-12'}`}>
                        <div className="flex flex-col gap-4">
                            {[
                                { title: "API Integration finalized", sub: "Backend Team", time: "2 mins ago", icon: <CheckCircle2 size={18} className="text-emerald-500" /> },
                                { title: "Database schema updated", sub: "Data Eng", time: "1 hr ago", icon: <CircleDashed size={18} className="text-amber-500" /> },
                            ].map((item, i) => (
                                <div key={i} className={`flex items-start gap-4 border-b border-[#222] pb-4 last:pb-0 last:border-0 transition-opacity duration-700 ease-out ${isVisible1 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${isVisible1 ? i * 200 : 0}ms` }}>
                                    <div className="mt-1">{item.icon}</div>
                                    <div className="flex-1">
                                        <div className="text-[14px] text-[#e8e8e8] font-medium">{item.title}</div>
                                        <div className="text-[12px] text-[#666] mt-0.5">{item.sub}</div>
                                    </div>
                                    <div className="text-[12px] text-[#555] whitespace-nowrap">{item.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Task Assignment (Square Card) */}
                <div ref={ref2} className="rounded-2xl bg-[#1a1a1a] border border-[#2e2e2e] p-8 md:p-10 relative overflow-hidden min-h-[360px] transition-colors duration-300 hover:border-[#444] hover:bg-[#1c1c1c]">
                    <div className="mb-8 relative z-10">
                        <span className="inline-block px-4 py-1.5 bg-[#252525] rounded-full text-xs text-[#aaa] font-medium tracking-wide mb-4 border border-[#333]">
                            Delegation
                        </span>
                        <h4 className="text-[24px] font-medium text-[#ECE8DF] mb-3">Clear Assignment</h4>
                        <p className="text-[#888] text-[15px] leading-relaxed">
                            Streamline your team's workflow and prevent bottlenecks.
                        </p>
                    </div>

                    {/* Faux UI Graphic: Assignment Tags */}
                    <div className={`absolute bottom-10 left-10 right-10 flex flex-col gap-3 transform transition-transform duration-700 ease-out ${isVisible2 ? 'scale-[1.03]' : 'scale-95'}`}>
                        <div className="bg-[#222] rounded-xl p-4 border border-[#333] shadow-lg flex justify-between items-center relative overflow-hidden">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                            <div className="text-[13px] text-[#ccc] font-medium pl-2">Assigned to You</div>
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-[10px] text-white font-bold shadow-md">AG</div>
                        </div>
                        <div className="bg-[#222] rounded-xl p-4 border border-[#333] shadow-lg flex justify-between items-center opacity-60">
                            <div className="text-[13px] text-[#888] pl-2">In Review</div>
                            <div className="text-[11px] px-2.5 py-1 bg-[#333] text-[#aaa] rounded-full font-medium">Pending</div>
                        </div>
                    </div>
                </div>

                {/* 3. Progress Analytics (Wide Card) */}
                <div ref={ref3} className="md:col-span-3 rounded-2xl bg-[#1a1a1a] border border-[#2e2e2e] p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center justify-between overflow-hidden transition-colors duration-300 hover:border-[#444] hover:bg-[#1c1c1c]">
                    <div className="flex-1 min-w-[280px]">
                        <span className="inline-block px-4 py-1.5 bg-emerald-900/30 text-emerald-400 border border-emerald-800/50 rounded-full text-xs font-medium tracking-wide mb-4">
                            Visibility, Visibility, Visibility
                        </span>
                        <h4 className="text-[28px] font-medium text-[#ECE8DF] mb-4">100% Tracking</h4>
                        <p className="text-[#888] text-[15px] leading-relaxed max-w-sm">
                            This AI-powered pipeline view reveals where the most progress is concentrated, helping your team make smarter decisions.
                        </p>
                    </div>

                    {/* Faux UI Graphic: Progress Chart */}
                    <div className="flex-1 w-full flex justify-end">
                        <div className={`bg-[#141414] border border-[#333] p-6 rounded-2xl w-full max-w-md shadow-2xl flex flex-col gap-6 transform transition-transform duration-700 ease-out ${isVisible3 ? '-translate-x-2' : 'translate-x-4'}`}>
                            {[
                                { label: "Frontend Tasks", val: "85%", w: "85%", color: "bg-emerald-500" },
                                { label: "Backend Integration", val: "60%", w: "60%", color: "bg-blue-500" },
                                { label: "Testing & QA", val: "25%", w: "25%", color: "bg-amber-500" },
                            ].map((bar, i) => (
                                <div key={i}>
                                    <div className={`flex justify-between items-end mb-2 transition-opacity duration-500 ${isVisible3 ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${isVisible3 ? i * 200 : 0}ms` }}>
                                        <span className="text-[13px] text-[#888] font-medium">{bar.label}</span>
                                        <span className="text-[14px] text-[#e8e8e8] font-bold">{bar.val}</span>
                                    </div>
                                    <div className="h-2 w-full bg-[#222] rounded-full overflow-hidden">
                                        <div
                                            className={`h-full ${bar.color} rounded-full relative transition-all duration-1000 ease-out`}
                                            style={{ width: isVisible3 ? bar.w : '0%', transitionDelay: `${isVisible3 ? i * 200 : 0}ms` }}
                                        >
                                            <div className="absolute top-0 right-0 bottom-0 left-0 bg-white/20"></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TodoChimpBento;
