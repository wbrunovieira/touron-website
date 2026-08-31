import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/business";

export function Logo({
  variant = "white",
  className = "h-11 w-auto",
  priority = false,
}: {
  variant?: "white" | "navy";
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={`/brand/logo-touron-${variant}.png`}
      alt={business.name}
      width={961}
      height={510}
      priority={priority}
      className={className}
    />
  );
}

export function LogoLink({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${business.name} — página inicial`}
      className="group inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.03]"
    >
      <Logo priority className={className ?? "h-12 w-auto md:h-15"} />
    </Link>
  );
}
