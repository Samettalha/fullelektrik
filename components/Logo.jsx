import Link from "next/link";

export function Logo({ light = false, className = "", onClick }) {
  return (
    <Link
      href="/"
      aria-label="FullElektrik ana sayfa"
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 ${className}`}
    >
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-navy shadow-sm">
        <svg
          viewBox="0 0 48 48"
          aria-hidden="true"
          focusable="false"
          className="size-8"
        >
          <path
            d="M27.5 5 12 27h10.2l-1.7 16L36 20.5H25.8L27.5 5Z"
            fill="#00C853"
          />
          <circle cx="37" cy="12" r="2.7" fill="#1A73E8" />
          <path
            d="M37 14.7v5.1h-4.2"
            fill="none"
            stroke="#60A5FA"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`text-xl font-extrabold tracking-tight ${
            light ? "text-white" : "text-brand-navy"
          }`}
        >
          Full
          <span className={light ? "text-brand-green" : "text-brand-green-ink"}>
            Elektrik
          </span>
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] ${
            light ? "text-white/65" : "text-muted"
          }`}
        >
          Elektrik &amp; Teknik Servis
        </span>
      </span>
    </Link>
  );
}
