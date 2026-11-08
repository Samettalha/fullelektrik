import { absoluteUrl, siteConfig } from "@/lib/site";

const socialImage = {
  url: "/images/og-image.png",
  width: 1200,
  height: 630,
  alt: "FullElektrik elektrik, diafon ve güvenlik kamerası hizmetleri",
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
  keywords = siteConfig.keywords,
} = {}) {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} | ${siteConfig.tagline}`;

  return {
    title: pageTitle,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [absoluteUrl(socialImage.url)],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
