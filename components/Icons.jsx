const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

function Svg({ children, className = "size-5", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...strokeProps}
      {...props}
    >
      {children}
    </svg>
  );
}

function BoltIcon({ className }) {
  return (
    <Svg className={className} fill="currentColor" stroke="none">
      <path d="M13.2 2 4.5 13.4h5.9L10.8 22l8.7-12h-5.9L13.2 2Z" />
    </Svg>
  );
}

function PlugIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M9 3v4M15 3v4M6 7h12v4a6 6 0 0 1-12 0V7Z" />
      <path d="M12 17v4" />
    </Svg>
  );
}

function IntercomIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="5" y="3" width="14" height="18" rx="3" />
      <circle cx="12" cy="9" r="2" />
      <path d="M8 14h8M8 17h5" />
    </Svg>
  );
}

function CameraIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M3 7.5 16 3l2 5.5L5 13 3 7.5Z" />
      <path d="M5 13v4a2 2 0 0 0 2 2h5" />
      <path d="m17 4.6 2.3-.8a2 2 0 0 1 2.5 1.3l.4 1.2a2 2 0 0 1-1.3 2.5l-2.3.8" />
      <path d="M7 19h5" />
    </Svg>
  );
}

function SearchIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.4-3.4" />
    </Svg>
  );
}

function ClipboardCheckIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="m9 14 2 2 4-4" />
    </Svg>
  );
}

function CheckCircleIcon({ className }) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12 2.3 2.3 4.7-5" />
    </Svg>
  );
}

function BadgeCheckIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m12 3 2.1 1.5 2.6-.2.9 2.4 2.2 1.5-1 2.4.4 2.5-2.4 1-.8 2.5-2.6-.3L12 21l-2.1-1.6-2.6.2-.9-2.4-2.2-1.5 1-2.4-.4-2.5 2.4-1 .8-2.5 2.6.3L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

function ShieldCheckIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 3 5 6v5c0 4.4 2.9 8.4 7 10 4.1-1.6 7-5.6 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </Svg>
  );
}

function SlidersIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 7h6M14 7h6M4 17h10M18 17h2" />
      <circle cx="12" cy="7" r="2" />
      <circle cx="16" cy="17" r="2" />
    </Svg>
  );
}

function HandshakeIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M8 11 5 8l3-3 4 2 4-2 3 3-3 3" />
      <path d="m11 7 5 5-3 3-2-2-2 2-5-5" />
      <path d="M8 14 5 17l2 2 3-3" />
      <path d="m16 14 3 3-2 2-3-3" />
    </Svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M6.5 3h3l1.5 4-2 1.5a14 14 0 0 0 6.5 6.5L17 13l4 1.5v3a2.5 2.5 0 0 1-2.7 2.5A17.5 17.5 0 0 1 4 5.7 2.5 2.5 0 0 1 6.5 3Z" />
    </Svg>
  );
}

function MailIcon({ className }) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </Svg>
  );
}

function MapPinIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </Svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </Svg>
  );
}

function MenuIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </Svg>
  );
}

function CloseIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m6 6 12 12M18 6 6 18" />
    </Svg>
  );
}

function CheckIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="m5 12 4 4L19 6" />
    </Svg>
  );
}

function PlusIcon({ className }) {
  return (
    <Svg className={className}>
      <path d="M12 5v14M5 12h14" />
    </Svg>
  );
}

function WhatsAppIcon({ className = "size-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.05-.52-.099-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.465 3.488" />
    </svg>
  );
}

const iconMap = {
  badgeCheck: BadgeCheckIcon,
  bolt: BoltIcon,
  camera: CameraIcon,
  check: CheckIcon,
  checkCircle: CheckCircleIcon,
  clipboardCheck: ClipboardCheckIcon,
  close: CloseIcon,
  handshake: HandshakeIcon,
  intercom: IntercomIcon,
  mail: MailIcon,
  mapPin: MapPinIcon,
  menu: MenuIcon,
  phone: PhoneIcon,
  plug: PlugIcon,
  plus: PlusIcon,
  search: SearchIcon,
  shieldCheck: ShieldCheckIcon,
  sliders: SlidersIcon,
  whatsapp: WhatsAppIcon,
  arrowRight: ArrowRightIcon,
};

export function Icon({ name, className }) {
  const Component = iconMap[name] || BoltIcon;

  return <Component className={className} />;
}

export {
  ArrowRightIcon,
  BoltIcon,
  CameraIcon,
  CheckCircleIcon,
  CheckIcon,
  ClipboardCheckIcon,
  CloseIcon,
  HandshakeIcon,
  IntercomIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  PhoneIcon,
  PlugIcon,
  PlusIcon,
  SearchIcon,
  ShieldCheckIcon,
  SlidersIcon,
  WhatsAppIcon,
};
