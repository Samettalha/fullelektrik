import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { trustPoints, whyFeatures } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";
import { getWhatsAppUrl, serviceAreasText } from "@/lib/site";

export const metadata = createMetadata({
  title: "Hakkımızda",
  description:
    "FullElektrik; elektrik tesisatı, diafon ve güvenlik kamerası alanlarında ev, iş yeri, apartman ve sitelere planlı, güvenli ve ihtiyaca uygun çözümler sunar.",
  path: "/hakkimizda",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="FullElektrik"
        title="Hakkımızda"
        description="Elektrik tesisatı, diafon ve güvenlik kamerası alanlarında; ihtiyacı doğru anlayan, planlı çalışan ve işçilik kalitesini ön planda tutan bir hizmet anlayışı."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda" },
        ]}
        actions={
          <ButtonLink
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="green"
            showWhatsApp
          >
            Bize ulaşın
          </ButtonLink>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-soft">
              <Image
                src="/images/elektrik-teknisyeni.jpg"
                alt="Elektrik panosunda çalışan FullElektrik teknisyeni"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-4 rounded-2xl bg-white p-4 shadow-lg sm:left-6">
              <p className="flex items-center gap-2 text-sm font-extrabold text-brand-navy">
                <Icon name="mapPin" className="size-4 text-brand-green-ink" />
                {serviceAreasText}
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <SectionHeading
              eyebrow="Hizmet anlayışımız"
              title="Güvenli, düzenli ve sürdürülebilir çözümler"
            />
            <div className="mt-6 space-y-4 text-base leading-8 text-muted">
              <p>
                FullElektrik, elektrik tesisatı, diafon sistemleri ve güvenlik
                kamerası alanlarında hizmet sunan bir teknik servis markasıdır.
                Ev, iş yeri, apartman ve sitelerde ihtiyaç duyulan işleri
                planlı bir süreç içinde ele alır.
              </p>
              <p>
                Amacımız; her işte ihtiyacı doğru anlamak, güvenli ve düzenli
                bir uygulama ortaya koymak ve iş sonrası kontrolle süreci
                tamamlamaktır. Kısa vadeli bir çözüm yerine, kullanım
                koşullarına uygun ve kalıcı bir sonuç hedefleriz.
              </p>
              <p>
                Çalışmalarımızda açık iletişim, temiz işçilik ve iş güvenliği
                önceliklidir. İhtiyacınızı paylaştığınızda önce dinliyor,
                ardından uygulanabilir çözümü ve kapsamı açıkça konuşuyoruz.
              </p>
            </div>

            <ul className="mt-7 space-y-3">
              {trustPoints.map((point) => (
                <li key={point.title} className="flex items-start gap-3">
                  <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-brand-green/10 text-brand-green-ink">
                    <Icon name={point.icon} className="size-4" />
                  </span>
                  <div>
                    <p className="text-sm font-extrabold text-brand-navy">
                      {point.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-6 text-muted">
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Değerlerimiz"
            title="Bizi biz yapan çalışma prensipleri"
            description="Her hizmette aynı özenle yaklaşmayı ve işin her adımında güven vermeyi önemsiyoruz."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-brand-navy/10 bg-brand-cream p-6"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-white text-brand-navy shadow-sm">
                  <Icon name={feature.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-brand-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Hizmetlerimiz"
              title="Farklı ihtiyaçlara tek noktadan çözüm"
              description="Birbirini tamamlayan hizmetlerimizle elektrik ve güvenlik sistemlerinizi birlikte değerlendirebiliriz."
            />
            <Link
              href="/hizmetlerimiz"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-navy transition hover:text-brand-green-ink"
            >
              Tüm hizmetler
              <Icon
                name="arrowRight"
                className="size-4 transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/hizmetlerimiz/${service.slug}`}
                className="group rounded-2xl border border-brand-navy/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-navy/20 hover:shadow-md"
              >
                <span className="grid size-11 place-items-center rounded-xl bg-brand-navy text-brand-green">
                  <Icon name={service.icon} className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-brand-navy">
                  {service.shortTitle}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {service.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-navy">
                  Detayları inceleyin
                  <Icon
                    name="arrowRight"
                    className="size-4 transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand className="mb-14 sm:mb-20" />
    </>
  );
}
