import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tjenester | Ingebrigt Dalset",
  description:
    "Servicepunkt, liftutleie og salg av dekk og deler. Orkel, Zetor, Kramp, Lilleseth.",
};

export default function TjenesterPage() {
  return (
    <div className="tjenester w-full">
      {/* Intro: text and postit on top of hero image */}
      <section
        className="tjenester-intro relative w-full min-h-[28rem] flex items-center bg-cover bg-center bg-no-repeat px-6 py-12"
        style={{
          backgroundImage: "url('/images/minimized/Tjenester toppbilde.jpg')",
        }}
      >
        <div className="tjenester-intro__inner relative z-10 mx-auto flex w-full max-w-none flex-col gap-14 lg:flex-row lg:items-center lg:justify-center">
          <div className="tjenester-intro__paper flex-1 max-w-md bg-transparent">
            <div className="relative mx-auto w-full max-w-md bg-transparent">
              <img
                src="/images/Tjeneste postit red (1).png"
                alt=""
                className="block h-auto w-full max-w-md object-contain"
              />
            </div>
          </div>
          <div className="tjenester-intro__image shrink-0">
            <div className="overflow-hidden rounded">
              <Image
                src="/images/Tjenester toppbilde 1 liten.png"
                alt=""
                width={400}
                height={300}
                className="h-auto w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servicepunkt, Liftutleie, Salg share one background */}
      <section
        className="tjenester-services w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bakgrunnsbilde.jpg')",
        }}
      >
        {/* Servicepunkt */}
        <div id="servicepunkt" className="service-block service-block--servicepunkt w-full py-12">
          <div className="service-block__inner flex w-full max-w-none flex-col gap-8 px-[5%] lg:px-[20%] lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8">
            <h2 className="service-block__title order-1 mb-2 inline-block w-fit border-b-2 border-[#412100] pb-0.5 font-semibold [color:var(--color-text)] [font-size:var(--font-size-2xl)] lg:col-start-2 lg:row-start-1">
              Servicepunkt
            </h2>
            <div className="service-block__image order-2 shrink-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <div className="overflow-hidden rounded">
                <Image
                  src="/images/minimized/Tjenesteside Servicepunkt.png"
                  alt="Servicepunkt"
                  width={400}
                  height={280}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="service-block__content order-3 flex-1 [color:var(--color-text)] [font-size:var(--font-size-base)] lg:col-start-2 lg:row-start-2">
              <p className="service-block__text mt-4">
                Servicebilen dekker store deler av Møre & Romsdal og reparerer
                traktorer og redskap der det står. Servicebilen er sertifisert av
                vegvesenet og verkstedet er godkjent servicepunkt for Orkel og
                Zetor.
              </p>
              <Link
                href="mailto:post@dalsetbilverksted.no"
                className="service-block__button mt-6 inline-block rounded px-6 py-3 font-calibri no-underline shadow-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-[1px] hover:shadow-lg [background-color:var(--color-accent)] [color:var(--color-text)]"
              >
                Bestill service
              </Link>
            </div>
          </div>
        </div>

        {/* Liftutleie */}
        <div id="liftutleie" className="service-block service-block--liftutleie w-full py-12">
          <div className="service-block__inner flex w-full max-w-none flex-col gap-8 px-[5%] lg:px-[20%] lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-8">
            <h2 className="service-block__title order-1 mb-2 inline-block w-fit border-b-2 border-[#412100] pb-0.5 font-semibold [color:var(--color-text)] [font-size:var(--font-size-2xl)] lg:col-start-1 lg:row-start-1">
              Liftutleie
            </h2>
            <div className="service-block__image order-2 shrink-0 lg:col-start-2 lg:row-span-2 lg:row-start-1">
              <div className="overflow-hidden rounded">
                <Image
                  src="/images/forside lift.png"
                  alt="Liftutleie"
                  width={400}
                  height={280}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="service-block__content order-3 flex-1 [color:var(--color-text)] [font-size:var(--font-size-base)] lg:col-start-1 lg:row-start-2">
              <p className="service-block__text mt-4">
                Har du behov for å leie vår hydrauliske 15M telescope lift?
                Praktisk lift på henger til små eller store prosjekter.
              </p>
              <p className="service-block__text mt-4">
                Ta kontakt for mer informasjon om leieperiode, priser og
                tilgjengelighet.
              </p>
              <Link
                href="/kontakt"
                className="service-block__button mt-6 inline-block rounded px-6 py-3 font-calibri no-underline shadow-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-[1px] hover:shadow-lg [background-color:var(--color-accent)] [color:var(--color-text)]"
              >
                Til kontaktsiden
              </Link>
            </div>
          </div>
        </div>

        {/* Salg */}
        <div id="salg" className="service-block service-block--salg w-full py-12">
          <div className="service-block__inner flex w-full max-w-none flex-col gap-8 px-[5%] lg:px-[20%] lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:gap-8">
            <h2 className="service-block__title order-1 mb-2 inline-block w-fit border-b-2 border-[#412100] pb-0.5 font-semibold [color:var(--color-text)] [font-size:var(--font-size-2xl)] lg:col-start-2 lg:row-start-1">
              Salg
            </h2>
            <div className="service-block__image order-2 shrink-0 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <div className="overflow-hidden rounded">
                <Image
                  src="/images/minimized/Tjenester salg.png"
                  alt="Salg"
                  width={400}
                  height={280}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
            <div className="service-block__content order-3 flex-1 [color:var(--color-text)] [font-size:var(--font-size-base)] lg:col-start-2 lg:row-start-2">
              <p className="service-block__text mt-4">
                Verkstedet er forhandler av BKT og Michelin dekk for traktor,
                hengere og landbruksredskaper. Få utført montering, verkstedet har
                egen dekkmaskin. Her skaffer du også deler og redskap for Orkel,
                Zetor, Kramp og Lilleseth. Ta kontakt for leveringstid og priser.
              </p>
              <Link
                href="/kontakt"
                className="service-block__button mt-6 inline-block rounded px-6 py-3 font-calibri no-underline shadow-sm transition-transform hover:-translate-y-0.5 hover:-translate-x-[1px] hover:shadow-lg [background-color:var(--color-accent)] [color:var(--color-text)]"
              >
                Til kontaktsiden
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Forhandleroversikt (leverandører) */}
      <section
        className="tjenester-forhandler relative w-full overflow-hidden px-6 py-10 [color:var(--color-text)] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/minimized/Tjenester forhandleroversikt.jpg')",
        }}
      >
        <div className="tjenester-forhandler__inner relative z-10 mx-auto max-w-4xl text-center">
          <div className="rounded-lg bg-black/45 px-10 py-10">
            <p className="tjenester-forhandler__suppliers font-calibri">
              Verkstedet er blant annet godkjent leverandør for:
            </p>
            <ul className="tjenester-forhandler__list mt-2 list-inside list-none font-calibri">
              <li>- Orkel</li>
              <li>- Zetor</li>
              <li>- Kramp</li>
              <li>- Lilleseth</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
