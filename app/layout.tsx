import type { Metadata } from "next";
import "./globals.css";
import { HeaderProvider } from "@/components/HeaderProvider";
import { AnalyticsPlaceholder } from "@/components/AnalyticsPlaceholder";

export const metadata: Metadata = {
  title: "Ingebrigt Dalset",
  description:
    "Verksted for reparasjon og vedlikehold av landbruksmaskiner. Nordmøre, Sunnmøre og Romsdal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body className="min-h-screen w-full">
        <AnalyticsPlaceholder />
        <HeaderProvider />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
