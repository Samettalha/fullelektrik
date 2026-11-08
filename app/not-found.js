import { ButtonLink } from "@/components/ButtonLink";
import { Icon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata = {
  title: "Sayfa bulunamadı | FullElektrik",
  alternates: {
    canonical: "/404",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-brand-green-ink">
          404
        </p>
        <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
          Aradığınız sayfayı bulamadık
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-base leading-8 text-muted">
          Bağlantı taşınmış veya adres yanlış yazılmış olabilir. Ana sayfaya
          dönebilir ya da hizmetlerimize göz atabilirsiniz.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/" variant="primary" showArrow className="group">
            Ana sayfaya dön
          </ButtonLink>
          <ButtonLink href="/hizmetlerimiz" variant="outline">
            Hizmetlerimiz
          </ButtonLink>
        </div>
        <p className="mt-8 text-sm text-muted">
          Yardıma ihtiyacınız varsa{" "}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-brand-navy underline decoration-brand-green decoration-2 underline-offset-4 hover:text-brand-green-ink"
          >
            <Icon name="whatsapp" className="size-4" />
            WhatsApp&apos;tan yazın
          </a>
          .
        </p>
      </div>
    </section>
  );
}
