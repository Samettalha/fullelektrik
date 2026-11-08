import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/site";

export function CtaBand({
  title = "Elektrik, diafon veya güvenlik kamerası ihtiyacınız mı var?",
  description = "İhtiyacınızı paylaşın; uygun çözümü birlikte değerlendirelim. WhatsApp üzerinden hızlıca bilgi alabilirsiniz.",
  className = "",
}) {
  return (
    <section className={`container-page ${className}`}>
      <div className="relative isolate overflow-hidden rounded-3xl bg-brand-navy px-6 py-10 text-white shadow-soft sm:px-10 sm:py-12">
        <div
          className="pointer-events-none absolute -right-20 -top-24 size-72 rounded-full border-[32px] border-brand-green/20"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 right-1/4 size-56 rounded-full bg-brand-blue/25 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-green-light">
              <Icon name="bolt" className="size-4" />
              Birlikte çözelim
            </p>
            <h2 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
              {description}
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <ButtonLink
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="green"
              showWhatsApp
            >
              WhatsApp&apos;tan yazın
            </ButtonLink>
            <ButtonLink href="/hizmetlerimiz" variant="ghost" showArrow>
              Hizmetlerimiz
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
