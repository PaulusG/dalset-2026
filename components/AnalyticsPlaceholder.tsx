"use client";

/**
 * Injects Google Analytics (GA4) when NEXT_PUBLIC_GA_MEASUREMENT_ID is set.
 * Leave unset until production URL is live on Netlify, then set in Netlify env and redeploy.
 */
export function AnalyticsPlaceholder() {
  const measurementId =
    typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID.length > 0
      ? process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
      : null;

  if (!measurementId) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}');
          `,
        }}
      />
    </>
  );
}
