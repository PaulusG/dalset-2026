import type { Metadata } from "next";
import { Dancing_Script } from "next/font/google";
import "./globals.css";
import { HeaderProvider } from "@/components/HeaderProvider";
import { AnalyticsPlaceholder } from "@/components/AnalyticsPlaceholder";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-dancing-script",
});

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "";

export const metadata: Metadata = {
  title: "Ingebrigt Dalset",
  description:
    "Verksted for reparasjon og vedlikehold av landbruksmaskiner. Nordmøre, Sunnmøre og Romsdal.",
  ...(googleSiteVerification && {
    verification: { google: googleSiteVerification },
  }),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no" className={dancingScript.variable}>
      <body className="min-h-screen w-full" suppressHydrationWarning>
        <AnalyticsPlaceholder />
        <HeaderProvider />
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
}
