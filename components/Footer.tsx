import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer w-full [background-color:var(--color-accent)] [color:var(--color-text)]">
      {/* Top section */}
      <div className="footer__top w-full border-b border-white/20 py-8">
        <div className="footer__top-inner mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:justify-center lg:gap-14">
          {/* Contact info - left */}
          <div className="footer__contact flex flex-col gap-2">
            <h3 className="footer__section-title mb-2 font-semibold [font-size:var(--font-size-lg)]">
              Kontakt
            </h3>
            <address className="footer__address not-italic">
              <p className="footer__address-line">Dalsetvegen 18</p>
              <p className="footer__address-line">6350 Eidsbygda</p>
            </address>
            <p className="footer__phone">
              <Link
                href="tel:+4798658834"
                className="footer__link underline hover:no-underline"
              >
                986 58 834
              </Link>
            </p>
            <p className="footer__email">
              <Link
                href="mailto:post@dalsetbilverksted.no"
                className="footer__link underline hover:no-underline"
              >
                post@dalsetbilverksted.no
              </Link>
            </p>
          </div>

          {/* Menu - right */}
          <nav className="footer__nav flex flex-col gap-2" aria-label="Footer navigasjon">
            <h3 className="footer__section-title mb-2 font-semibold [font-size:var(--font-size-lg)]">
              Meny
            </h3>
            <Link
              href="/kontakt"
              className="footer__link underline hover:no-underline"
            >
              Kontakt
            </Link>
            <Link
              href="/tjenester"
              className="footer__link underline hover:no-underline"
            >
              Tjenester
            </Link>
          </nav>
        </div>
      </div>

      {/* Bottom section */}
      <div className="footer__bottom w-full py-4 text-center [font-size:var(--font-size-base)]">
        <p className="footer__copyright">
          {currentYear} © Powered by{" "}
          <Link
            href="https://www.mokkis.no/kontakt/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link underline hover:no-underline"
          >
            Mokkis AS
          </Link>
        </p>
      </div>
    </footer>
  );
}
