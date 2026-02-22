import Link from "next/link";

export default function Button({
    children,
    href,
    variant = 'primary', // primary, secondary, outline, ghost
    className = '',
    ...props
}) {
    const baseStyles = "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all hover:scale-105 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-white shadow-sm hover:bg-primary/90 focus-visible:outline-primary",
        secondary: "bg-secondary text-white shadow-sm hover:bg-secondary/90 focus-visible:outline-secondary",
        accent: "bg-accent text-white shadow-sm hover:bg-accent/90 focus-visible:outline-accent",
        outline: "ring-1 ring-inset ring-slate-300 text-slate-700 hover:bg-slate-50",
        ghost: "text-slate-600 hover:text-primary hover:bg-primary/5",
    };

    const combinedClassName = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
}
