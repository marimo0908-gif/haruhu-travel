"use client";

import { useEffect } from "react";

// .reveal が付いた要素が画面に入ったら .in を付けて、下からふわっと表示する
export default function RevealInit() {
    useEffect(() => {
        const els = Array.from(document.querySelectorAll(".reveal"));
        if (!("IntersectionObserver" in window)) {
            els.forEach((e) => e.classList.add("in"));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((en) => {
                    if (en.isIntersecting || en.boundingClientRect.top < window.innerHeight) {
                        en.target.classList.add("in");
                        io.unobserve(en.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
        );
        const sweep = () =>
            els.forEach((e) => {
                if (!e.classList.contains("in") && e.getBoundingClientRect().top < window.innerHeight) {
                    e.classList.add("in");
                    io.unobserve(e);
                }
            });
        els.forEach((e) => io.observe(e));
        window.addEventListener("scroll", sweep, { passive: true });
        sweep();
        return () => window.removeEventListener("scroll", sweep);
    }, []);

    return null;
}
