import { WhatsAppIcon } from "@/components/Icons";
import { getWhatsAppUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="group fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-brand-green text-brand-navy-dark shadow-[0_14px_35px_-10px_rgba(0,163,68,0.75)] transition hover:scale-105 hover:bg-brand-green-dark focus-visible:scale-105 sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-brand-navy px-3 py-2 text-xs font-bold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
        WhatsApp&apos;tan yazın
      </span>
    </a>
  );
}
