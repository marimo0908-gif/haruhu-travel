import React from "react";

export default function PRBadge({ className = "" }) {
    return (
        <span translate="no" className={`inline-block px-2 py-0.5 text-[10px] sm:text-xs font-bold text-slate-500 border border-slate-300 rounded bg-white ${className}`}>
            PR
        </span>
    );
}
