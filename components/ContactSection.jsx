import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import {
  emailDisplay,
  getPhoneUrl,
  getWhatsAppUrl,
  phoneDisplay,
  serviceAreasText,
  siteConfig,
} from "@/lib/site";

export function ContactSection({
  eyebrow = "İletişim",
  title = "Talebinizi paylaşın, birlikte değerlendirelim",
  description = "Elektrik tesisatı, diafon veya güvenlik kamerası ihtiyaçlarınız için bize ulaşın. Uygun çözümü planlamak için ihtiyacınızı kısaca dinleyelim.",
}) {
  const phoneUrl = getPhoneUrl();
  const emailUrl = siteConfig.email ? `mailto:${siteConfig.email}` : null;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section
      id="iletisim"
      className="scroll-mt-24 pb-14 pt-16 sm:pb-20 sm:pt-20"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              description={description}
            />

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-green/10 text-brand-green-ink">
                  <Icon name="whatsapp" className="size-5" />
                </span>
                <span className="mt-4 block text-sm font-extrabold text-brand-navy">
                  WhatsApp
                </span>
                <span className="mt-1 block text-xs leading-5 text-muted">
                  Hızlı iletişim için yazın
                </span>
              </a>

              {phoneUrl ? (
                <a
                  href={phoneUrl}
                  className="group rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Icon name="phone" className="size-5" />
                  </span>
                  <span className="mt-4 block break-all text-sm font-extrabold text-brand-navy">
                    {siteConfig.phone}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-muted">
                    Telefonla arayın
                  </span>
                </a>
              ) : (
                <div className="rounded-2xl border border-dashed border-brand-navy/15 bg-white/60 p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
                    <Icon name="phone" className="size-5" />
                  </span>
                  <span className="mt-4 block text-sm font-extrabold text-brand-navy">
                    Telefon
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-muted">
                    {phoneDisplay}
                  </span>
                </div>
              )}

              {emailUrl ? (
                <a
                  href={emailUrl}
                  className="group rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-green/40 hover:shadow-md"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy">
                    <Icon name="mail" className="size-5" />
                  </span>
                  <span className="mt-4 block break-all text-sm font-extrabold text-brand-navy">
                    {siteConfig.email}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-muted">
                    E-posta ile yazın
                  </span>
                </a>
              ) : (
                <div className="rounded-2xl border border-dashed border-brand-navy/15 bg-white/60 p-5">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy">
                    <Icon name="mail" className="size-5" />
                  </span>
                  <span className="mt-4 block text-sm font-extrabold text-brand-navy">
                    E-posta
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-muted">
                    {emailDisplay}
                  </span>
                </div>
              )}

              <div className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm">
                <span className="grid size-11 place-items-center rounded-xl bg-brand-green/10 text-brand-green-ink">
                  <Icon name="mapPin" className="size-5" />
                </span>
                <span className="mt-4 block text-sm font-extrabold text-brand-navy">
                  Hizmet Bölgesi
                </span>
                <span className="mt-1 block text-xs leading-5 text-muted">
                  {serviceAreasText}
                </span>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-brand-navy/10 bg-brand-navy p-5 text-white">
              <p className="flex items-start gap-3 text-sm leading-6 text-white/75">
                <Icon
                  name="shieldCheck"
                  className="mt-0.5 size-5 shrink-0 text-brand-green"
                />
                İhtiyacınızı doğru anlamak ve uygun çözümü planlamak için
                önce bilgi alıyor, ardından işlem kapsamını paylaşıyoruz.
              </p>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
