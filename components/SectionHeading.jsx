export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) {
  const isCentered = align === "center";

  return (
    <div
      className={`${isCentered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-green-ink ${
            isCentered ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-6 bg-brand-green" aria-hidden="true" />
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
