"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { Icon } from "@/components/Icons";
import { ButtonLink } from "@/components/ButtonLink";
import {
  getPhoneUrl,
  getWhatsAppUrl,
  navItems,
  serviceAreasText,
  siteConfig,
} from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const phoneUrl = getPhoneUrl();
  const whatsappUrl = getWhatsAppUrl();

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-navy/10 bg-brand-cream/90 backdrop-blur-lg">
      <div className="container-page flex h-20 items-center justify-between gap-4">
        <Logo onClick={() => setIsOpen(false)} />

        <nav aria-label="Ana menü" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive(item.href)
                      ? "bg-brand-navy/5 text-brand-navy"
                      : "text-muted hover:bg-brand-navy/5 hover:text-brand-navy"
                  }`}
                >
                  {item.label}
                  {isActive(item.href) ? (
                    <span
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-green"
                      aria-hidden="true"
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          {phoneUrl ? (
            <ButtonLink
              href={phoneUrl}
              variant="outline"
              size="sm"
              className="gap-2"
            >
              <Icon name="phone" className="size-4 text-brand-green-ink" />
              {siteConfig.phone}
            </ButtonLink>
          ) : null}
          <ButtonLink
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="green"
            size="sm"
            showWhatsApp
          >
            WhatsApp
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          className="grid size-11 place-items-center rounded-xl border border-brand-navy/15 bg-white text-brand-navy transition hover:bg-brand-cream lg:hidden"
        >
          <Icon name={isOpen ? "close" : "menu"} className="size-6" />
        </button>
      </div>

      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-brand-navy/10 bg-brand-cream shadow-xl lg:hidden"
        >
          <div className="container-page max-h-[calc(100dvh-5rem)] overflow-y-auto py-5">
            <nav aria-label="Mobil menü">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-semibold transition ${
                        isActive(item.href)
                          ? "bg-white text-brand-navy shadow-sm"
                          : "text-muted hover:bg-white hover:text-brand-navy"
                      }`}
                    >
                      {item.label}
                      <Icon
                        name="arrowRight"
                        className="size-4 text-brand-green-ink"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-5 rounded-2xl border border-brand-navy/10 bg-white p-4">
              <p className="flex items-center gap-2 text-sm font-semibold text-brand-navy">
                <Icon name="mapPin" className="size-4 text-brand-green-ink" />
                {serviceAreasText}
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                <ButtonLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="green"
                  showWhatsApp
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  WhatsApp&apos;tan yazın
                </ButtonLink>
                {phoneUrl ? (
                  <ButtonLink
                    href={phoneUrl}
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon name="phone" className="size-4" />
                    {siteConfig.phone}
                  </ButtonLink>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
