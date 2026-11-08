import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";

export function ServiceCard({ service }) {
  return (
    <Link
      href={`/hizmetlerimiz/${service.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-brand-navy/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-navy/20"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-brand-navy shadow-sm backdrop-blur">
          {service.category}
        </span>
        <span className="absolute bottom-4 right-4 grid size-11 place-items-center rounded-xl bg-brand-navy text-brand-green shadow-lg">
          <Icon name={service.icon} className="size-6" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-extrabold tracking-tight text-brand-navy">
          {service.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-muted">{service.excerpt}</p>

        <ul className="mt-5 space-y-2.5">
          {service.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2 text-sm font-medium text-ink"
            >
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-green-ink">
                <Icon name="check" className="size-3.5" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <span className="mt-6 inline-flex items-center gap-2 border-t border-brand-navy/10 pt-5 text-sm font-bold text-brand-navy">
          Detayları inceleyin
          <Icon
            name="arrowRight"
            className="size-4 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
