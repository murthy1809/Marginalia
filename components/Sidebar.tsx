"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOKSHELF } from "@/lib/fixtures";

type NavItem = {
  label: string;
  href?: string;
  badge?: string;
  icon: string;
};

const PRIMARY: NavItem[] = [
  { label: "Watchlist", href: "/app/bookshelf", icon: "shows" },
  { label: "History", icon: "clock" },
  { label: "Notes", icon: "note" },
];

function Icon({ name }: { name: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "shows":
      return (
        <svg {...common}>
          <rect x="4" y="6" width="16" height="11" rx="2" />
          <path d="M9 20h6M12 17v3" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      );
    case "note":
      return (
        <svg {...common}>
          <path d="M5 4h11l3 3v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
          <path d="M8 9h8M8 13h8M8 17h5" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 4l1.7 4.6L18 10l-4.3 1.4L12 16l-1.7-4.6L6 10l4.3-1.4z" />
        </svg>
      );
    default:
      return null;
  }
}

function NavRow({ item, active }: { item: NavItem; active: boolean }) {
  const base =
    "group flex items-center gap-2 px-2.5 py-1.5 rounded-md text-sm select-none";
  const cls = active
    ? `${base} bg-[var(--color-line)] text-[var(--color-ink)] font-medium`
    : `${base} text-[var(--color-ink-muted)] hover:bg-[var(--color-line)]/60 hover:text-[var(--color-ink)]`;
  const content = (
    <>
      <span className="text-[var(--color-ink-faint)] group-hover:text-[var(--color-ink-muted)]">
        <Icon name={item.icon} />
      </span>
      <span className="flex-1">{item.label}</span>
      {item.badge && (
        <span className="text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--color-accent)] text-white">
          {item.badge}
        </span>
      )}
    </>
  );
  if (item.href) {
    return (
      <Link href={item.href} className={cls}>
        {content}
      </Link>
    );
  }
  return (
    <button
      type="button"
      className={`${cls} text-left w-full`}
      title="Demo mode - not wired up"
    >
      {content}
    </button>
  );
}

export default function Sidebar() {
  const pathname = usePathname();
  const isActive = (href?: string) => !!href && pathname.startsWith(href);

  return (
    <aside className="w-60 shrink-0 border-r border-[var(--color-line)] bg-[var(--color-bg)] h-screen sticky top-0 flex flex-col">
      <div className="px-4 h-14 flex items-center gap-2 border-b border-[var(--color-line)]">
        <div className="w-7 h-7 rounded-md bg-[var(--color-accent)] text-white flex items-center justify-center text-[12px] font-semibold serif">
          M
        </div>
        <span className="serif text-[15px] font-semibold tracking-tight text-[var(--color-ink)]">
          Marginalia
        </span>
        <span className="ml-auto text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--color-line)] text-[var(--color-ink-muted)]">
          Demo
        </span>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-5">
        <div className="space-y-0.5">
          <div className="px-2.5 pb-1 text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)]">
            Workspace
          </div>
          {PRIMARY.map((item) => (
            <NavRow
              key={item.label}
              item={item}
              active={isActive(item.href)}
            />
          ))}
        </div>

        <div className="space-y-0.5">
          <div className="px-2.5 pb-1 text-[11px] uppercase tracking-wider text-[var(--color-ink-faint)]">
            Recent recaps
          </div>
          {BOOKSHELF.filter((b) => b.recapAvailable).map((b) => (
            <Link
              key={b.slug}
              href={`/app/recap/${b.slug}`}
              className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-sm text-[var(--color-ink-muted)] hover:bg-[var(--color-line)]/60 hover:text-[var(--color-ink)] ${
                pathname.startsWith(`/app/recap/${b.slug}`)
                  ? "bg-[var(--color-line)] text-[var(--color-ink)] font-medium"
                  : ""
              }`}
            >
              <span className="text-[var(--color-ink-faint)]">
                <Icon name="spark" />
              </span>
              <span className="flex-1 truncate">{b.series}</span>
            </Link>
          ))}
        </div>
      </nav>

      <div className="px-3 py-3 border-t border-[var(--color-line)] text-[11px] text-[var(--color-ink-faint)]">
        Bounded by your last watched episode.
      </div>
    </aside>
  );
}
