import Link from "next/link";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";
import { services } from "@/lib/services";
import {
  emailDisplay,
  getPhoneUrl,
  getWhatsAppUrl,
  navItems,
  phoneDisplay,
  serviceAreasText,
  siteConfig,
} from "@/lib/site";

export function Footer() {
  const phoneUrl = getPhoneUrl();
  const emailUrl = siteConfig.email ? `mailto:${siteConfig.email}` : null;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy-dark text-white">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Elektrik tesisatı, diafon ve güvenlik kamerası alanlarında ev,
              iş yeri, apartman ve siteler için planlı, güvenli ve ihtiyaca
              uygun çözümler.
            </p>
            <p className="mt-5 flex items-start gap-2 text-sm text-white/70">
              <Icon
                name="mapPin"
                className="mt-0.5 size-4 shrink-0 text-brand-green"
              />
              <span>{serviceAreasText}</span>
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
              Hızlı Bağlantılar
            </h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-white/70 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
              Hizmetlerimiz
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/hizmetlerimiz/${service.slug}`}
                    className="text-sm font-medium leading-6 text-white/70 transition hover:text-white"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-brand-green">
              İletişim
            </h2>
            <address className="mt-5 space-y-3 not-italic">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 text-sm text-white/70 transition hover:text-white"
              >
                <Icon
                  name="whatsapp"
                  className="mt-0.5 size-4 shrink-0 text-brand-green"
                />
                WhatsApp ile iletişim
              </a>
              {phoneUrl ? (
                <a
                  href={phoneUrl}
                  className="flex items-start gap-2.5 text-sm text-white/70 transition hover:text-white"
                >
                  <Icon
                    name="phone"
                    className="mt-0.5 size-4 shrink-0 text-brand-green"
                  />
                  {siteConfig.phone}
                </a>
              ) : (
                <p className="flex items-start gap-2.5 text-sm text-white/60">
                  <Icon
                    name="phone"
                    className="mt-0.5 size-4 shrink-0 text-brand-green"
                  />
                  {phoneDisplay}
                </p>
              )}
              {emailUrl ? (
                <a
                  href={emailUrl}
                  className="flex items-start gap-2.5 break-all text-sm text-white/70 transition hover:text-white"
                >
                  <Icon
                    name="mail"
                    className="mt-0.5 size-4 shrink-0 text-brand-green"
                  />
                  {siteConfig.email}
                </a>
              ) : (
                <p className="flex items-start gap-2.5 text-sm text-white/60">
                  <Icon
                    name="mail"
                    className="mt-0.5 size-4 shrink-0 text-brand-green"
                  />
                  {emailDisplay}
                </p>
              )}
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <p>Elektrik · Diafon · Güvenlik Kamerası</p>
        </div>
      </div>
    </footer>
  );
}
