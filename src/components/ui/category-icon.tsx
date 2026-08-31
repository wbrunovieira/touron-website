import {
  BatteryCharging,
  CircleDot,
  CloudRain,
  Cog,
  Droplet,
  PaintBucket,
  Radio,
  Sparkles,
  SprayCan,
  Thermometer,
  TreePine,
  Wrench,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Droplet,
  Thermometer,
  BatteryCharging,
  Sparkles,
  TreePine,
  CloudRain,
  Radio,
  Wrench,
  CircleDot,
  Cog,
  PaintBucket,
  SprayCan,
};

export function CategoryIcon({
  name,
  className = "size-5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Cog;
  return <Icon className={className} strokeWidth={1.75} aria-hidden />;
}

export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WhatsappIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.06 8.06 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.2 8.2 0 0 1-4.13-1.13l-.29-.18-3.06.8.82-2.99-.19-.31a8.05 8.05 0 0 1-1.24-4.3c0-4.46 3.63-8.07 8.1-8.07Zm-3.2 4.06c-.16 0-.42.06-.64.3-.22.24-.85.83-.85 2.02s.87 2.35.99 2.51c.12.16 1.7 2.72 4.19 3.71.59.24 1.04.38 1.4.48.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.1-.22-.16-.46-.28-.24-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.55.12-.16.24-.63.8-.78.96-.14.16-.28.18-.52.06-.24-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.31-.76-1.79-.2-.46-.4-.4-.55-.41h-.47Z" />
    </svg>
  );
}
