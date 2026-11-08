import { ButtonLink } from "@/components/ButtonLink";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/lib/services";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata = createMetadata({
  title: "Hizmetlerimiz",
  description:
    "Elektrik tesisatı, görüntülü diafon ve güvenlik kamerası sistemleri. Ev, iş yeri, apartman ve siteler için kurulum, arıza tespiti, onarım ve yenileme hizmetleri.",
  path: "/hizmetlerimiz",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Elektrik, diafon ve güvenlik sistemleri"
        description="Ev, iş yeri, apartman ve sitelerde ihtiyaç duyulan elektrik ve teknik servis işlerini planlı bir şekilde ele alıyoruz. Kurulum, arıza tespiti, onarım ve yenileme hizmetlerimizi inceleyin."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz" },
        ]}
        actions={
          <ButtonLink
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="green"
            showWhatsApp
          >
            Bilgi alın
          </ButtonLink>
        }
      />

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-brand-navy/10 bg-white p-6 text-sm leading-7 text-muted shadow-sm sm:p-8">
            <p>
              Aradığınız hizmeti listede bulamadıysanız veya ihtiyacınızın
              hangi kapsama girdiğinden emin değilseniz bize ulaşabilirsiniz.
              Kısa bir değerlendirme sonrasında uygun çözümü birlikte
              belirleyelim.
            </p>
          </div>
        </div>
      </section>

      <CtaBand className="mb-14 sm:mb-20" />
    </>
  );
}
