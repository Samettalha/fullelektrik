// FullElektrik marka, iletişim ve site ayarları.
// Yayına almadan önce TODO olarak işaretlenen alanları güncelleyin.

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "https://fullelektrik.example.com";
}

export const siteConfig = {
  name: "FullElektrik",
  tagline: "Elektrik ve Teknik Servis",
  description:
    "Elektrik tesisatı, diafon sistemleri ve güvenlik kamerası çözümleriyle evinizde ve iş yerinizde güvenli, konforlu ve kesintisiz bir yaşam sunuyoruz.",
  // Vercel'de otomatik algılanır; özel alan adı için NEXT_PUBLIC_SITE_URL tanımlayın.
  siteUrl: resolveSiteUrl(),
  phone: "0507 787 74 98",
  whatsapp: "905077877498",
  email: "idrissakinc@fullbatarya.com.tr",
  // TODO: Hizmet verdiğiniz bölgeleri güncelleyin.
  serviceAreas: ["Ankara ve çevresi"],
  region: "Ankara",
  keywords: [
    "Ankara elektrikçi",
    "Ankara elektrik tesisatı",
    "Ankara elektrik arıza servisi",
    "görüntülü diafon montajı",
    "güvenlik kamerası kurulumu",
    "kamera sistemleri montajı",
    "elektrik tesisatı yenileme",
  ],
};

export const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export const defaultWhatsAppMessage =
  "Merhaba, FullElektrik hizmetleri hakkında bilgi almak istiyorum.";

export const phoneDisplay = siteConfig.phone || "Telefon numarası eklenecek";
export const emailDisplay = siteConfig.email || "E-posta adresi eklenecek";
export const serviceAreasText = siteConfig.serviceAreas.length
  ? siteConfig.serviceAreas.join(" · ")
  : "Hizmet bölgesi bilgisi eklenecek";

function normalizePhoneNumber(number) {
  const digits = (number || "").replace(/\D/g, "");

  if (!digits) {
    return "";
  }

  if (digits.startsWith("90")) {
    return digits;
  }

  if (digits.startsWith("0")) {
    return `90${digits.slice(1)}`;
  }

  return `90${digits}`;
}

export function getWhatsAppUrl(message = defaultWhatsAppMessage) {
  const number = normalizePhoneNumber(siteConfig.whatsapp);
  const text = encodeURIComponent(message);

  return number
    ? `https://wa.me/${number}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export function getPhoneUrl() {
  const number = normalizePhoneNumber(siteConfig.phone);

  return number ? `tel:+${number}` : null;
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.siteUrl).toString();
}

export function getOrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: absoluteUrl("/icon.svg"),
    description: siteConfig.description,
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
  };

  if (siteConfig.phone || siteConfig.email) {
    schema.contactPoint = {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: siteConfig.phone
        ? `+${normalizePhoneNumber(siteConfig.phone)}`
        : undefined,
      email: siteConfig.email || undefined,
      areaServed: siteConfig.region,
      availableLanguage: "Turkish",
    };
  }

  return schema;
}
