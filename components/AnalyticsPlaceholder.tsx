"use client";

import { useEffect } from "react";

/**
 * Loads Google Analytics (GA4) after page is interactive to avoid blocking LCP.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in Netlify env and .env.local.
 */
export function AnalyticsPlaceholder() {
  const measurementId =
    typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID.length > 0
      ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
      : null;

  useEffect(() => {
    if (!measurementId) return;
    const loadGtag = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
      (window as unknown as { dataLayer: unknown[] }).dataLayer =
        (window as unknown as { dataLayer?: unknown[] }).dataLayer || [];
      const gtag = (...args: unknown[]) => {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push(args);
      };
      (window as unknown as { gtag: typeof gtag }).gtag = gtag;
      gtag("js", new Date());
      gtag("config", measurementId);
    };
    if (typeof requestIdleCallback !== "undefined") {
      requestIdleCallback(loadGtag, { timeout: 2000 });
    } else {
      setTimeout(loadGtag, 1);
    }
  }, [measurementId]);

  return null;
}
