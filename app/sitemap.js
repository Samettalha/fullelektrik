import { services } from "@/lib/services";
import { absoluteUrl } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "monthly" },
    { path: "/hizmetlerimiz", priority: 0.9, changeFrequency: "monthly" },
    { path: "/hakkimizda", priority: 0.7, changeFrequency: "yearly" },
    { path: "/iletisim", priority: 0.8, changeFrequency: "yearly" },
  ];

  const serviceRoutes = services.map((service) => ({
    path: `/hizmetlerimiz/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
