import React from 'react';
import { Search, FolderOpen, Bookmark, LayoutGrid, Star, ArrowUpRight, Compass } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const ContentLibBento = () => {
    const [ref1, isVisible1] = useScrollReveal(0.3);
    const [ref2, isVisible2] = useScrollReveal(0.3);
    const [ref3, isVisible3] = useScrollReveal(0.3);

    return (
        <div className="w-full mt-16 mb-24">
            <div className="flex items-center gap-4 mb-10">
                <h2 className="text-2xl font-semibold text-[#e8e8e8]">Library Features</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-[#333] to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Hero Feature: Curated Discovery */}
                <div ref={ref1} className="col-span-1 md:col-span-2 rounded-2xl bg-[#141414] border border-[#2e2e2e] p-8 flex flex-col relative overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none"></div>

                    <div className="flex-1 flex items-center justify-center min-h-[300px] w-full mb-8 relative">
                        {/* Faux UI: Search & Filter Layout */}
                        <div className={`w-full max-w-md bg-[#0a0a0a] border border-[#333] rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden shadow-2xl transition-all duration-700 ease-out ${isVisible1 ? 'scale-100 opacity-100' : 'scale-95 opacity-50'}`}>
                            {/* Background Grid */}
                            <div className="absolute inset-0 bg-[radial-gradient(#222_1px,transparent_1px)] [background-size:12px_12px] opacity-40"></div>

                            {/* Search Bar */}
                            <div className={`w-full h-12 bg-[#141414] border border-[#444] rounded-xl flex items-center px-4 gap-3 shadow-[inset_0_2px_10px_rgba(0,0,0,0.5)] relative z-10 transition-colors duration-700 delay-500 ${isVisible1 ? 'border-blue-500/50' : ''}`}>
                                <Search size={18} className={`transition-colors duration-700 delay-500 ${isVisible1 ? 'text-blue-400' : 'text-[#888]'}`} />
                                <div className={`flex items-center text-[#e8e8e8] font-mono text-sm overflow-hidden whitespace-nowrap transition-all duration-[1500ms] ease-out ${isVisible1 ? 'max-w-[200px]' : 'max-w-0'}`}>
                                    react UI kits
                                </div>
                                {isVisible1 && <span className="w-1.5 h-4 bg-blue-500 ml-1 animate-pulse"></span>}
                            </div>

                            {/* Category Pills */}
                            <div className={`flex gap-2 flex-wrap relative z-10 transition-all duration-700 delay-300 ${isVisible1 ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                {['UI Kits', 'Typography', 'Animations', 'Icons'].map((tag, i) => (
                                    <div key={i} className={`px-3 py-1.5 rounded-full text-[11px] font-medium border ${i === 0 ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.2)]' : 'bg-[#1a1a1a] border-[#333] text-[#888] hover:border-[#555]'}`}>
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            {/* Masonry Mock */}
                            <div className="grid grid-cols-2 gap-3 mt-2 relative z-10">
                                {/* Card 1 */}
                                <div className={`h-28 bg-[#1a1a1a] rounded-xl border border-[#333] flex flex-col overflow-hidden shadow-lg transform transition-all duration-700 delay-500 ${isVisible1 ? '-translate-y-2 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                    <div className="h-12 bg-gradient-to-br from-purple-500/20 to-blue-500/20 w-full border-b border-[#333]"></div>
                                    <div className="p-3">
                                        <div className="h-2 w-3/4 bg-[#555] rounded-full mb-2"></div>
                                        <div className="h-1.5 w-1/2 bg-[#333] rounded-full"></div>
                                    </div>
                                </div>
                                {/* Card 2 */}
                                <div className={`h-36 bg-[#1a1a1a] rounded-xl border border-[#333] flex flex-col overflow-hidden shadow-lg transform transition-all duration-700 delay-700 ${isVisible1 ? '-translate-y-2 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                    <div className="h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 w-full border-b border-[#333] relative">
                                        <div className="absolute bottom-2 right-2 p-1 rounded-md bg-[#111] border border-[#333]">
                                            <Star size={10} className="text-emerald-400" />
                                        </div>
                                    </div>
                                    <div className="p-3">
                                        <div className="h-2 w-full bg-[#555] rounded-full mb-2"></div>
                                        <div className="h-1.5 w-2/3 bg-[#333] rounded-full mb-1"></div>
                                        <div className="h-1.5 w-1/3 bg-[#333] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-auto relative z-10">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                            <Compass className="text-blue-400" size={24} />
                        </div>
                        <h3 className="text-2xl font-medium text-[#e8e8e8] mb-3 tracking-tight">Rapid Resource Discovery</h3>
                        <p className="text-[#888] leading-relaxed text-[15px] max-w-md">
                            A highly optimized, fully searchable index of hand-picked web development tools and assets, categorized for instant access.
                        </p>
                    </div>
                </div>

                {/* Secondary Feature: Bookmarking */}
                <div ref={ref2} className="col-span-1 rounded-2xl bg-[#141414] border border-[#2e2e2e] p-8 flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px] pointer-events-none"></div>

                    <div className="flex-1 flex flex-col justify-end min-h-[250px] w-full mb-8">
                        {/* Faux UI: Saved Items */}
                        <div className="w-full bg-[#1a1a1a] border border-[#333] rounded-2xl p-4 shadow-xl flex flex-col gap-3 relative overflow-hidden">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`flex items-center justify-between p-3 rounded-xl bg-[#222] border transition-all duration-500 ease-out ${isVisible2 ? 'border-[#444] translate-x-0 opacity-100' : 'border-[#2a2a2a] -translate-x-4 opacity-0'}`} style={{ transitionDelay: `${isVisible2 ? i * 150 : 0}ms` }}>
                                    <div className="flex gap-3 items-center">
                                        <div className="w-8 h-8 rounded-lg bg-[#333] flex items-center justify-center">
                                            <FolderOpen size={14} className="text-[#888]" />
                                        </div>
                                        <div className="w-16 h-2 bg-[#444] rounded-full"></div>
                                    </div>
                                    <Bookmark size={16} className={`text-emerald-400 fill-emerald-400/20 transition-transform duration-500 delay-500 ${isVisible2 ? 'scale-100' : 'scale-0'}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto relative z-10">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                            <Bookmark className="text-emerald-400" size={20} />
                        </div>
                        <h3 className="text-xl font-medium text-[#e8e8e8] mb-2 tracking-tight">Verified Quality</h3>
                        <p className="text-[#888] leading-relaxed text-[14px]">
                            Save and organize your favorite tools. Every resource is manually verified to ensure top-tier quality.
                        </p>
                    </div>
                </div>

                {/* Third Feature: Complete Overview */}
                <div ref={ref3} className="col-span-1 md:col-span-3 rounded-2xl bg-[#141414] border border-[#2e2e2e] p-8 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-purple-500/5 blur-[100px] pointer-events-none"></div>

                    <div className="flex-1 relative z-10 order-2 md:order-1">
                        <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                            <LayoutGrid className="text-purple-400" size={24} />
                        </div>
                        <h3 className="text-2xl font-medium text-[#e8e8e8] mb-3 tracking-tight">Comprehensive Catalog</h3>
                        <p className="text-[#888] leading-relaxed text-[15px] max-w-xl">
                            Stop searching through cluttered bookmarks. The library provides a beautifully structured, grid-based overview of everything a modern developer needs.
                        </p>
                    </div>

                    <div className="flex-1 w-full order-1 md:order-2 flex justify-center md:justify-end">
                        {/* Faux UI: UI Cards Grid */}
                        <div className={`grid grid-cols-2 gap-4 w-full max-w-[280px] transition-transform duration-[1500ms] ease-out ${isVisible3 ? 'rotate-0 scale-100' : 'rotate-[-10deg] scale-90'}`}>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className={`p-4 rounded-xl border border-[#333] shadow-lg transition-all duration-700 ${i % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#222]'} ${isVisible3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${isVisible3 ? i * 150 : 0}ms` }}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="w-8 h-8 rounded-full bg-[#444]"></div>
                                        <ArrowUpRight size={14} className="text-[#888]" />
                                    </div>
                                    <div className="w-full h-1.5 bg-[#444] rounded-full mb-2"></div>
                                    <div className="w-2/3 h-1.5 bg-[#333] rounded-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContentLibBento;
