import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ContactSection } from "@/components/ContactSection";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { ProcessSteps } from "@/components/ProcessSteps";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { trustPoints, whyFeatures } from "@/lib/content";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";
import { serviceAreasText } from "@/lib/site";

export const metadata = createMetadata({ path: "/" });

const heroChecks = [
  "Planlı keşif ve değerlendirme",
  "Güvenli ve temiz işçilik",
  "İş sonrası sistem kontrolü",
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 -top-40 size-[32rem] rounded-full bg-brand-green/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-32 top-1/3 size-72 rounded-full bg-brand-blue/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="container-page relative grid gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/80 px-4 py-2 text-xs font-bold text-brand-navy shadow-sm">
              <Icon name="mapPin" className="size-4 text-brand-green-ink" />
              Hizmet bölgesi: {serviceAreasText}
            </p>

            <h1 className="mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-navy sm:text-5xl xl:text-6xl">
              Güvenli Yaşam Alanları,{" "}
              <span className="mt-1 block text-brand-green-ink">
                Kesintisiz Enerji
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Elektrik tesisatı, diafon sistemleri ve güvenlik kamerası
              çözümlerimizle evinizde ve iş yerinizde güvenli, konforlu ve
              kesintisiz bir yaşam sunuyoruz.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink
                href="/hizmetlerimiz"
                variant="primary"
                size="lg"
                showArrow
                className="group"
              >
                Hizmetlerimizi Keşfedin
              </ButtonLink>
              <ButtonLink href="/iletisim" variant="outline" size="lg">
                Bize Ulaşın
              </ButtonLink>
            </div>

            <ul className="mt-8 grid gap-3 text-sm font-semibold text-ink sm:grid-cols-2">
              {heroChecks.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-green-ink">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div
              className="absolute -inset-4 -z-10 rounded-[2.5rem] border border-brand-green/20 bg-white/40"
              aria-hidden="true"
            />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 shadow-soft">
              <Image
                src="/images/hero-teknisyen.jpg"
                alt="Elektrik tesisatı üzerinde çalışan FullElektrik teknisyeni"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-brand-navy/45 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/50 bg-white/95 p-4 shadow-lg backdrop-blur sm:left-6 sm:right-auto sm:w-72">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-navy text-brand-green">
                  <Icon name="shieldCheck" className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-brand-navy">
                    Güvenli ve planlı uygulama
                  </p>
                  <p className="mt-1 text-xs leading-5 text-muted">
                    Keşiften teslimata kadar kontrollü süreç
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-8 sm:py-10">
        <div className="grid overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-soft md:grid-cols-3">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 border-b border-brand-navy/10 p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-6"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-green/10 text-brand-green-ink">
                <Icon name={point.icon} className="size-5" />
              </span>
              <div>
                <h2 className="text-sm font-extrabold text-brand-navy">
                  {point.title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-muted">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Hizmetlerimiz"
              title="İhtiyacınıza uygun elektrik ve teknik servis çözümleri"
              description="Elektrik tesisatından diafon ve güvenlik kamerası sistemlerine kadar geniş bir hizmet kapsamı sunuyoruz."
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

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-soft">
              <Image
                src="/images/elektrik-teknisyeni.jpg"
                alt="Dış mekânda elektrik panosunda çalışan teknisyen"
                fill
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[15rem] rounded-2xl bg-brand-navy p-4 text-white shadow-lg sm:right-6">
              <p className="flex items-center gap-2 text-sm font-extrabold">
                <Icon name="bolt" className="size-4 text-brand-green" />
                Tek noktadan çözüm
              </p>
              <p className="mt-1.5 text-xs leading-5 text-white/65">
                Elektrik, diafon ve güvenlik sistemleri
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <SectionHeading
              eyebrow="Neden FullElektrik?"
              title="İşin her aşamasında güvenilir ve planlı bir yaklaşım"
              description="Her mekânın ihtiyacı farklıdır. Bu nedenle önce dinliyor, ardından uygun çözümü planlıyor ve titizlikle uyguluyoruz."
            />

            <ul className="mt-7 space-y-5">
              {whyFeatures.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-navy/5 text-brand-navy">
                    <Icon name={feature.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-extrabold text-brand-navy">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <SectionHeading
            align="center"
            eyebrow="Çalışma Sürecimiz"
            title="İlk iletişimden teslimata kadar net bir süreç"
            description="Süreci baştan sona planlı yürütüyor, her adımda ihtiyacınıza uygun ilerliyoruz."
          />
          <div className="mt-10">
            <ProcessSteps />
          </div>
        </div>
      </section>

      <CtaBand />

      <ContactSection />
    </>
  );
}
