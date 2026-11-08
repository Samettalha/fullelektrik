import { processSteps } from "@/lib/content";

export function ProcessSteps({ steps = processSteps }) {
  return (
    <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-navy text-sm font-extrabold text-white">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="h-px flex-1 bg-brand-navy/10" aria-hidden="true" />
          </div>
          <h3 className="mt-4 text-base font-extrabold text-brand-navy">
            {step.title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
