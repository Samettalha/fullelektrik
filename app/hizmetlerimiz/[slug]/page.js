import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { Icon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";
import { getServiceBySlug, services } from "@/lib/services";
import {
  absoluteUrl,
  getPhoneUrl,
  getWhatsAppUrl,
  serviceAreasText,
  siteConfig,
} from "@/lib/site";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createMetadata({
      title: "Hizmet bulunamadı",
      path: `/hizmetlerimiz/${slug}`,
    });
  }

  return createMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/hizmetlerimiz/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const phoneUrl = getPhoneUrl();
  const otherServices = services.filter((item) => item.slug !== service.slug);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.shortTitle,
        description: service.excerpt,
        url: absoluteUrl(`/hizmetlerimiz/${service.slug}`),
        provider: {
          "@type": "Organization",
          name: siteConfig.name,
          url: siteConfig.siteUrl,
        },
        areaServed: siteConfig.serviceAreas.map((area) => ({
          "@type": "AdministrativeArea",
          name: area,
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Ana Sayfa",
            item: absoluteUrl("/"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Hizmetlerimiz",
            item: absoluteUrl("/hizmetlerimiz"),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: service.shortTitle,
            item: absoluteUrl(`/hizmetlerimiz/${service.slug}`),
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={structuredData} />

      <PageHero
        eyebrow={service.category}
        title={service.title}
        description={service.excerpt}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz", href: "/hizmetlerimiz" },
          { label: service.shortTitle },
        ]}
        actions={
          <>
            <ButtonLink
              href={getWhatsAppUrl(
                `Merhaba, ${service.shortTitle} hakkında bilgi almak istiyorum.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="green"
              showWhatsApp
            >
              Bilgi alın
            </ButtonLink>
            <ButtonLink
              href="/hizmetlerimiz"
              variant="outline"
              showArrow
              className="group"
            >
              Tüm hizmetler
            </ButtonLink>
          </>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-12">
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border-4 border-white bg-slate-100 shadow-soft">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 65vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {service.audiences.map((audience) => (
                <span
                  key={audience}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/10 bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy"
                >
                  <Icon name="check" className="size-3.5 text-brand-green-ink" />
                  {audience}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-4 text-base leading-8 text-muted">
              {service.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy">
                Hizmet kapsamımız
              </h2>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-sm font-semibold leading-6 text-ink"
                  >
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-green-ink">
                      <Icon name="check" className="size-3.5" />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy">
                Hangi durumlarda bize ulaşabilirsiniz?
              </h2>
              <p className="mt-3 text-sm leading-7 text-muted">
                Aşağıdaki durumlardan birini yaşıyorsanız, sistemin durumunu
                birlikte değerlendirelim.
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {service.symptoms.map((symptom) => (
                  <li
                    key={symptom}
                    className="flex items-start gap-2.5 rounded-xl border border-brand-navy/10 bg-white px-4 py-3 text-sm leading-6 text-ink"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-blue"
                      aria-hidden="true"
                    />
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-2xl font-extrabold tracking-tight text-brand-navy">
                Sık sorulan sorular
              </h2>
              <div className="mt-5 space-y-3">
                {service.faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm"
                  >
                    <summary className="faq-summary flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-extrabold text-brand-navy sm:text-base">
                      {faq.question}
                      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-navy/5 text-brand-navy transition group-open:rotate-45">
                        <Icon name="plus" className="size-4" />
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-5 self-start lg:sticky lg:top-28">
            <div className="rounded-3xl bg-brand-navy p-6 text-white shadow-soft">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-green-light">
                <Icon name="bolt" className="size-4" />
                Bilgi alın
              </p>
              <h2 className="mt-3 text-xl font-extrabold tracking-tight">
                Bu hizmet için bize ulaşın
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/70">
                İhtiyacınızı kısaca paylaşın; uygun çözümü ve işlem kapsamını
                birlikte değerlendirelim.
              </p>
              <div className="mt-5 flex flex-col gap-2.5">
                <ButtonLink
                  href={getWhatsAppUrl(
                    `Merhaba, ${service.shortTitle} hakkında bilgi almak istiyorum.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="green"
                  showWhatsApp
                  className="w-full"
                >
                  WhatsApp&apos;tan yazın
                </ButtonLink>
                {phoneUrl ? (
                  <ButtonLink
                    href={phoneUrl}
                    variant="ghost"
                    className="w-full"
                  >
                    <Icon name="phone" className="size-4" />
                    {siteConfig.phone}
                  </ButtonLink>
                ) : null}
                <ButtonLink
                  href="/iletisim"
                  variant="ghost"
                  showArrow
                  className="group w-full"
                >
                  İletişim formu
                </ButtonLink>
              </div>
              <p className="mt-5 flex items-start gap-2 border-t border-white/10 pt-4 text-xs leading-5 text-white/60">
                <Icon
                  name="mapPin"
                  className="mt-0.5 size-4 shrink-0 text-brand-green"
                />
                {serviceAreasText}
              </p>
            </div>

            <div className="rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand-navy">
                Diğer hizmetler
              </h2>
              <ul className="mt-4 space-y-2">
                {otherServices.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/hizmetlerimiz/${item.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-ink transition hover:border-brand-navy/10 hover:bg-brand-cream hover:text-brand-navy"
                    >
                      <span className="flex items-center gap-2.5">
                        <Icon
                          name={item.icon}
                          className="size-4 text-brand-green-ink"
                        />
                        {item.shortTitle}
                      </span>
                      <Icon
                        name="arrowRight"
                        className="size-4 shrink-0 text-brand-navy/30 transition group-hover:translate-x-0.5 group-hover:text-brand-navy"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand className="mb-14 sm:mb-20" />
    </>
  );
}
