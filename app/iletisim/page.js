import { ButtonLink } from "@/components/ButtonLink";
import { ContactSection } from "@/components/ContactSection";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";
import { getWhatsAppUrl } from "@/lib/site";

export const metadata = createMetadata({
  title: "İletişim",
  description:
    "Elektrik tesisatı, diafon veya güvenlik kamerası ihtiyaçlarınız için FullElektrik ile iletişime geçin. WhatsApp, telefon veya iletişim formu üzerinden bize ulaşabilirsiniz.",
  path: "/iletisim",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Bize ulaşın"
        title="İletişim"
        description="Elektrik tesisatı, diafon veya güvenlik kamerası ihtiyaçlarınız için bize ulaşın. İhtiyacınızı kısaca paylaşın, uygun çözümü birlikte değerlendirelim."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "İletişim" },
        ]}
        actions={
          <ButtonLink
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="green"
            showWhatsApp
          >
            WhatsApp&apos;tan yazın
          </ButtonLink>
        }
      />

      <ContactSection
        eyebrow="İletişim bilgileri"
        title="Talebinizi paylaşın"
        description="Telefon, WhatsApp veya form üzerinden bize ulaşabilirsiniz. Mesajınızı aldıktan sonra ihtiyacınızı değerlendirip uygun çözümü planlıyoruz."
      />
    </>
  );
}
