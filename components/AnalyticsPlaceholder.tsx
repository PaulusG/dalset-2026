"use client";

import { useEffect, useState } from "react";
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
  const [isGtagReady, setIsGtagReady] = useState(false);

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

    const sendPageView = () => {
      const eventPayload = {
        page_path: `${window.location.pathname}${window.location.search}`,
        page_location: window.location.href,
      };
      window.gtag("event", "page_view", eventPayload);
      if (isDebugEnabled) {
        console.info("[GA] page_view", { measurementId, ...eventPayload });
      }
    };

    // Send first page view once GA is ready.
    sendPageView();

    // SPA navigations (Next.js uses History API under the hood).
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      sendPageView();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      sendPageView();
    };

    window.addEventListener("popstate", sendPageView);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener("popstate", sendPageView);
    };
  }, [isDebugEnabled, isGtagReady, measurementId]);

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
