import Image from "next/image";
import Link from "next/link";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://dalsetbilverksted.no";

const companyJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#company`,
  name: "Ingebrigt Dalset",
  alternateName: "Ingebr. Dalset Bilverksted",
  description:
    "Verkstedet jobber med reparasjon og vedlikehold av landbruksmaskiner og dekker store deler av Møre og Romsdal. I tillegg til salg av traktordekk og deler for landbruket. Servicebilen utfører reparasjoner direkte der maskinene står. Nordmøre, Sunnmøre og Romsdal.",
  url: SITE_URL,
  telephone: "+4798658834",
  email: "post@dalsetbilverksted.no",
  taxID: "934 618 246",
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: { "@type": "GeoCoordinates", latitude: 62.9, longitude: 8.0 },
    geoRadius: "150000",
    name: "Nordmøre, Sunnmøre og Romsdal",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dalsetvegen 18",
    addressLocality: "Eidsbygda",
    postalCode: "6350",
    addressRegion: "Møre og Romsdal",
    addressCountry: "NO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 62.78,
    longitude: 8.42,
  },
  image: `${SITE_URL}/images/Ingebrigt%20Dalset%20logo%20hvit%20red.png`,
  sameAs: [],
};

export const metadata = {
  title: "Forside | Ingebrigt Dalset",
  description:
    "Verkstedet jobber med reparasjon og vedlikehold av landbruksmaskiner og dekker store deler av Møre og Romsdal.",
};

export default function ForsidePage() {
  return (
    <div className="forside w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyJsonLd) }}
      />
      {/* Hero */}
      <section
        className="hero w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bakgrunnsbilde.jpg')" }}
      >
        <div className="hero__inner flex w-full max-w-none flex-col gap-10 px-[5%] lg:px-[20%] py-12 lg:py-16">
          <div className="hero__title text-center">
            <Image
              src="/images/Ingebrigt Dalset logo hvit red.png"
              alt="Ingebrigt Dalset"
              width={400}
              height={150}
              className="mx-auto h-auto w-full max-w-md object-contain"
            />
          </div>
          <div className="hero__columns flex w-full flex-col gap-8 lg:flex-row lg:items-center lg:justify-center">
            <div className="hero__image-wrap shrink-0 lg:w-1/2">
              <div className="relative inline-block overflow-hidden rounded-sm">
                <Image
                  src="/images/minimized/Forside toppbilde.png"
                  alt="Servicebil"
                  width={400}
                  height={400}
                  className="h-auto w-full max-w-md object-cover"
                />
              </div>
            </div>
            <div className="hero__content flex flex-1 flex-col justify-center gap-6">
              <div className="hero__text space-y-4 [color:var(--color-text)] [font-size:var(--font-size-base)]">
                <p>
                  Verkstedet jobber med reparasjon og vedlikehold av
                  landbruksmaskiner og dekker store deler av Møre og Romsdal.
                </p>
                <p>
                  I tillegg til salg av blant annet traktordekk, redskap og deler for landbruket.
                </p>
              </div>
              <div className="hero__buttons flex flex-wrap gap-4">
                <Link
                  href="/tjenester"
                  className="button inline-block rounded px-6 py-3 font-calibri no-underline shadow-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-[1px] hover:shadow-lg [background-color:var(--color-accent)] [color:var(--color-text)]"
                >
                  Tjenester
                </Link>
                <Link
                  href="/kontakt"
                  className="button inline-block rounded px-6 py-3 font-calibri no-underline shadow-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-[1px] hover:shadow-lg [background-color:var(--color-accent)] [color:var(--color-text)]"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid section */}
      <section
        className="mid-section relative w-full bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: "url('/images/Forside Arbeidsbil red.jpg')" }}
      >
        <div className="mid-section__overlay absolute inset-0" />
        <div className="mid-section__content relative z-10 mx-auto max-w-4xl px-6 text-center [color:var(--color-text-white)]">
          <div className="mid-section__text-wrap rounded-lg bg-black/45 px-10 py-10">
            <p className="mid-section__text mb-4 [font-size:var(--font-size-mid)]">
              Få hjelp når traktoren eller redskapene stopper. Med servicebilen
              utføreres reparasjoner direkte der maskinene står, enten det er på
              gården eller ute i felt.
            </p>
            <p className="mid-section__region mb-4 font-semibold [font-size:var(--font-size-mid)]">
              – Nordmøre, Sunnmøre og Romsdal –
            </p>
            <p className="mid-section__text [font-size:var(--font-size-mid)]">
              Servicebilen er godkjent av Statens vegvesen og har løyve som
              traktorverksted, slik at du kan være trygg på at jobben blir gjort
              skikkelig.
            </p>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section
        className="services-grid w-full bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: "url('/images/bakgrunnsbilde.jpg')" }}
      >
        <div className="services-grid__inner grid w-full max-w-none grid-cols-1 gap-12 px-[5%] md:px-[20%] md:grid-cols-3">
          <article className="services-grid__item flex flex-col text-left">
            <div className="services-grid__image-wrap mb-4 overflow-hidden rounded-sm">
              <Image
                src="/images/minimized/forside 1.1.png"
                alt="Service og reparasjon"
                width={300}
                height={300}
                className="h-auto w-full object-cover"
              />
            </div>
            <h2 className="services-grid__title mb-2 inline-block w-fit border-b-2 border-[#412100] pb-0.5 font-normal [color:var(--color-text)] [font-size:var(--font-size-2xl)]">
              Service og reparasjon
            </h2>
            <p className="services-grid__description mb-4 [color:var(--color-text)] [font-size:var(--font-size-base)]">
              Har utstyret stoppet, redskapet fått en skade, eller bare behov for vedlikehold.
            </p>
            <Link
              href="/tjenester#servicepunkt"
              className="services-grid__button mt-auto inline-block w-fit rounded px-6 py-3 font-calibri no-underline shadow-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-[1px] hover:shadow-lg [background-color:var(--color-accent)] [color:var(--color-text)]"
            >
              Les mer
            </Link>
          </article>

          <article className="services-grid__item flex flex-col text-left">
            <div className="services-grid__image-wrap mb-4 overflow-hidden rounded-sm">
              <Image
                src="/images/minimized/forside 3.png"
                alt="Salg"
                width={300}
                height={300}
                className="h-auto w-full object-cover"
              />
            </div>
            <h2 className="services-grid__title mb-2 inline-block w-fit border-b-2 border-[#412100] pb-0.5 font-normal [color:var(--color-text)] [font-size:var(--font-size-2xl)]">
              Salg
            </h2>
            <p className="services-grid__description mb-4 [color:var(--color-text)] [font-size:var(--font-size-base)]">
              Traktordekk, deler og redskap til landbruket med mer.
            </p>
            <Link
              href="/tjenester#salg"
              className="services-grid__button mt-auto inline-block w-fit rounded px-6 py-3 font-calibri no-underline shadow-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-[1px] hover:shadow-lg [background-color:var(--color-accent)] [color:var(--color-text)]"
            >
              Les mer
            </Link>
          </article>

          <article className="services-grid__item flex flex-col text-left">
            <div className="services-grid__image-wrap mb-4 overflow-hidden rounded-sm">
              <Image
                src="/images/minimized/forside 2.2.png"
                alt="Liftutleie"
                width={300}
                height={300}
                className="h-auto w-full object-cover"
              />
            </div>
            <h2 className="services-grid__title mb-2 inline-block w-fit border-b-2 border-[#412100] pb-0.5 font-normal [color:var(--color-text)] [font-size:var(--font-size-2xl)]">
              Liftutleie
            </h2>
            <p className="services-grid__description mb-4 [color:var(--color-text)] [font-size:var(--font-size-base)]">
              Behov for å leie lift? Ta kontakt for tilgjengelighet og pris.
            </p>
            <Link
              href="/tjenester#liftutleie"
              className="services-grid__button mt-auto inline-block w-fit rounded px-6 py-3 font-calibri no-underline shadow-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-[1px] hover:shadow-lg [background-color:var(--color-accent)] [color:var(--color-text)]"
            >
              Les mer
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
