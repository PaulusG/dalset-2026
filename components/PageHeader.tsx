import Link from "next/link";
import Image from "next/image";

export type HeaderVariant = "light" | "dark";

const NAV_LINKS = [
  { href: "/forside", label: "Forside" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/tjenester", label: "Tjenester" },
] as const;

type PageSlug = "forside" | "kontakt" | "tjenester";

type PageHeaderProps = {
  currentPage?: PageSlug;
  variant: HeaderVariant;
  logoSrc: string;
};

export function PageHeader({ currentPage, variant: _variant, logoSrc }: PageHeaderProps) {
  return (
    <header className="page-header page-header--light w-full bg-vintage-cream">
      <div className="page-header__inner flex w-full flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/forside"
          className="page-header__logo flex shrink-0 items-center"
        >
          <Image
            src={logoSrc}
            alt="Ingebrigt Dalset"
            width={220}
            height={56}
            quality={70}
            className="h-auto w-auto max-h-12 object-contain"
          />
        </Link>
        <nav className="page-header__nav flex items-center gap-8" aria-label="Hovednavigasjon">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = currentPage && href === `/${currentPage}`;
            return (
              <Link
                key={href}
                href={href}
                className={`page-header__link font-calibri no-underline hover:underline [color:var(--color-accent)] ${isActive ? "page-header__link--active font-semibold" : ""}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
