import React, { useState } from 'react';

export default function TasbeehApp() {
    // State: count hamara data hai, setCount usey badalne wala function
    const [count, setCount] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
            <h2 className="text-xl md:text-2xl mb-10 text-slate-500 uppercase tracking-[0.3em] font-light">
                Digital Tasbeeh
            </h2>

            {/* Massive Number - React automatically updates this when count changes */}
            <div className="text-[12rem] md:text-[15rem] font-black mb-16 text-emerald-400 drop-shadow-[0_0_35px_rgba(52,211,153,0.3)]">
                {count}
            </div>

            <div className="flex gap-8">
                {/* Count Button */}
                <button 
                    onClick={() => setCount(count + 1)}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-12 py-5 rounded-3xl text-2xl font-bold shadow-xl active:scale-90 transition-all border-b-8 border-emerald-800"
                >
                    COUNT
                </button>

                {/* Reset Button */}
                <button 
                    onClick={() => setCount(0)}
                    className="bg-rose-600 hover:bg-rose-500 text-white px-12 py-5 rounded-3xl text-2xl font-bold shadow-xl active:scale-90 transition-all border-b-8 border-rose-800"
                >
                    RESET
                </button>
            </div>

            <p className="mt-16 text-slate-600 text-sm font-mono uppercase tracking-widest">
                Reactive State Management
            </p>
        </div>
    );
}