import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs = [],
  actions,
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-brand-navy/10 bg-gradient-to-b from-white to-brand-cream">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-1/3 size-72 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative py-14 sm:py-20">
        {breadcrumbs.length ? (
          <nav aria-label="Sayfa yolu" className="mb-6">
            <ol className="flex flex-wrap items-center gap-2 text-xs font-semibold text-muted">
              {breadcrumbs.map((item, index) => {
                const isLast = index === breadcrumbs.length - 1;

                return (
                  <li key={`${item.label}-${index}`} className="flex items-center gap-2">
                    {item.href && !isLast ? (
                      <Link
                        href={item.href}
                        className="transition hover:text-brand-navy"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-brand-navy" : ""}>
                        {item.label}
                      </span>
                    )}
                    {!isLast ? (
                      <span className="text-brand-navy/30" aria-hidden="true">
                        /
                      </span>
                    ) : null}
                  </li>
                );
              })}
            </ol>
          </nav>
        ) : null}

        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-green-ink">
              <span className="h-px w-6 bg-brand-green" aria-hidden="true" />
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              {description}
            </p>
          ) : null}
          {actions ? (
            <div className="mt-8 flex flex-wrap gap-3">{actions}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
