"use client";

import { usePathname } from "next/navigation";
import { PageHeader } from "./PageHeader";

export function HeaderProvider() {
  const pathname = usePathname();

  const isForside = pathname === "/forside" || pathname === "/";
  const isKontakt = pathname === "/kontakt";
  const isTjenester = pathname === "/tjenester";

  const currentPage = isForside ? "forside" : isKontakt ? "kontakt" : isTjenester ? "tjenester" : undefined;

  return (
    <PageHeader
      currentPage={currentPage}
      variant="light"
      logoSrc="/images/Ingebrigt Dalset Logo.png"
    />
  );
}
