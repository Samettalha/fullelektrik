import Link from "next/link";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/Icons";

const variantClasses = {
  primary:
    "bg-brand-navy text-white shadow-sm hover:bg-brand-navy-dark hover:shadow-md",
  green:
    "bg-brand-green text-brand-navy-dark shadow-sm hover:bg-brand-green-dark hover:shadow-md",
  outline:
    "border border-brand-navy/20 bg-white/80 text-brand-navy hover:border-brand-navy/40 hover:bg-white",
  light:
    "bg-white text-brand-navy shadow-sm hover:bg-brand-cream hover:shadow-md",
  ghost:
    "border border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/15",
};

const sizeClasses = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-3 text-sm",
  lg: "min-h-12 px-6 py-3.5 text-base",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  showArrow = false,
  showWhatsApp = false,
  ...props
}) {
  const classes = `group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-bold transition duration-200 ${
    variantClasses[variant] || variantClasses.primary
  } ${sizeClasses[size] || sizeClasses.md} ${className}`;

  const content = (
    <>
      {showWhatsApp ? <WhatsAppIcon className="size-5 shrink-0" /> : null}
      <span>{children}</span>
      {showArrow ? (
        <ArrowRightIcon className="size-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
      ) : null}
    </>
  );

  if (
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:") ||
    href.startsWith("https://wa.me")
  ) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
