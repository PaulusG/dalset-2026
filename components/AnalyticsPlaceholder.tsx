"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

/**
 * Loads Google Analytics (GA4) and tracks route changes in App Router.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in Netlify env and .env.local.
 */
export function AnalyticsPlaceholder() {
  const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";
  const isDebugEnabled =
    process.env.NODE_ENV !== "production" ||
    process.env.NEXT_PUBLIC_GA_DEBUG === "true";
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isGtagReady, setIsGtagReady] = useState(false);

  const pagePath = useMemo(() => {
    const query = searchParams.toString();
    return query ? `${pathname}?${query}` : pathname;
  }, [pathname, searchParams]);

  useEffect(() => {
    if (measurementId) return;
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        "Google Analytics disabled: NEXT_PUBLIC_GA_MEASUREMENT_ID is not set.",
      );
    }
  }, [measurementId]);

  useEffect(() => {
    if (!measurementId || !isGtagReady) return;
    const eventPayload = {
      page_path: pagePath,
      page_location: window.location.href,
    };
    window.gtag("event", "page_view", eventPayload);
    if (isDebugEnabled) {
      console.info("[GA] page_view", { measurementId, ...eventPayload });
    }
  }, [isDebugEnabled, isGtagReady, measurementId, pagePath]);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
        onLoad={() => {
          setIsGtagReady(true);
          if (isDebugEnabled) {
            console.info("[GA] gtag.js loaded", { measurementId });
          }
        }}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${measurementId}', { send_page_view: false });
        `}
      </Script>
    </>
  );
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}
