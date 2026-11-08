import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(siteConfig.siteUrl).origin,
  };
}
