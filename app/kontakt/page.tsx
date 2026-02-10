import Image from "next/image";
import Link from "next/link";

/* Show address in Google Maps (no directions) */
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Dalsetvegen+18,+6350+Eidsbygda";

export const metadata = {
  title: "Kontakt | Ingebrigt Dalset",
  description:
    "Kontakt Ingebrigt Dalset. Adresse: Dalsetvegen 18, 6350 Eidsbygda. Åpningstider og kontaktinfo.",
};

export default function KontaktPage() {
  return (
    <div className="kontakt w-full">
      {/* Contact hero: desktop = image left, text right; mobile/tab = text first, image below */}
      <section
        className="contact-hero relative w-full bg-cover bg-center bg-no-repeat py-16"
        style={{
          backgroundImage: "url('/images/kontakt bakgrunnsbilde topå.jpg')",
        }}
      >
        <div className="contact-hero__overlay absolute inset-0 bg-black/40" />
        <div className="contact-hero__inner relative z-10 mx-auto flex w-full max-w-none flex-col-reverse gap-12 px-6 lg:flex-row lg:items-center lg:justify-center lg:gap-16">
          <div className="contact-hero__photos flex flex-col gap-4 sm:flex-row sm:gap-6">
            <div className="relative shrink-0 overflow-hidden rounded">
              <Image
                src="/images/kontaktside profilbilde.png"
                alt="Ingebrigt Dalset"
                width={576}
                height={521}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
          <div className="contact-hero__info flex flex-col text-left [color:var(--color-text)] [font-size:var(--font-size-base)]">
            <h1 className="contact-hero__title font-script font-bold [font-size:var(--font-size-hero)]">
              Ingebrigt Dalset
            </h1>
            <dl className="contact-hero__list mt-4 grid grid-cols-[minmax(6rem,auto)_1fr] gap-x-4 gap-y-1.5 font-calibri">
              <dt className="text-left">Tlf:</dt>
              <dd className="text-left">986 58 834</dd>
              <dt className="text-left">E-post:</dt>
              <dd className="text-left">post@dalsetbilverksted.no</dd>
              <dt className="text-left">Org.nr.:</dt>
              <dd className="text-left">934 618 246</dd>
              <dt className="text-left">Adresse:</dt>
              <dd className="text-left">
                Dalsetvegen 18
                <br />
                6350 Eidsbygda
              </dd>
            </dl>
          </div>
        </div>
      </section>

      {/* Intro, map and history share one background */}
      <section
        className="contact-main w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bakgrunnsbilde.jpg')" }}
      >
        {/* Intro */}
        <div className="contact-intro w-full px-6 py-10">
          <p className="contact-intro__text mx-auto max-w-3xl text-center [color:var(--color-text)] [font-size:var(--font-size-lg)]">
            Et moderne landbruksverksted bygget på gammeldagse verdier –
            reparerer, tilpasser og skaper løsninger som varer.
          </p>
        </div>

        {/* Map + opening hours */}
        <div className="contact-map-hours w-full px-6 py-12">
          <div className="contact-map-hours__inner mx-auto flex w-full max-w-none flex-col gap-10 lg:flex-row lg:items-center lg:justify-center">
            <div className="contact-map-hours__map flex flex-1 flex-col items-center">
              <Link
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Image
                  src="/images/Kontaktsiden Vintage kart red.png"
                  alt="Kart"
                  width={400}
                  height={300}
                  className="h-auto w-full max-w-md object-contain"
                />
              </Link>
              <p className="contact-map-hours__caption mt-2 text-center [color:var(--color-text)] [font-size:var(--font-size-base)]">
                Klikk på kartet for å åpne adressen i Google Maps
              </p>
            </div>
            <div className="contact-map-hours__hours flex flex-1 justify-center">
              <Image
                src="/images/Kontaktside Postit åpningstider red.png"
                alt="Åpningstider"
                width={280}
                height={200}
                className="h-auto w-full max-w-xs object-contain"
              />
            </div>
          </div>
        </div>

        {/* History */}
        <div className="contact-history w-full px-6 py-16">
          <div className="contact-history__inner mx-auto max-w-3xl space-y-6 [color:var(--color-text)] [font-size:var(--font-size-base)]">
            <p>
              Ingebr. Dalset Bilverksted ble etablert i 1963 av Ingebrikt Dalset
              senior og drives i dag av sønnen Ingebrigt Dalset.
            </p>
            <p>
              Ingebrigt Dalset sr startet verkstedet i vognskjulet på gården sin
              tidlig på 60-tallet. I 1968 bygde han verksted. Dalset bilverksted
              drev med både reparasjon, oppretting og lakkering av biler, etter
              hvert også landbruksmaskiner og traktorer. I 2010 ble det oppført en
              hall, først og fremst tenkt som lager og nytt verksted.
            </p>
            <p>
              I dag er virksomheten basert på reparasjon, service og salg av
              landbruksmaskiner. Verkstedet er godkjent for reparasjon av både
              bil og traktor, men hovedmengden av arbeidet er landbruksrelatert.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
