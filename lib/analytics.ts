export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
) {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  };
  w.gtag?.("event", name, params);
  w.dataLayer?.push({ event: name, ...params });
}

export function trackMetaLead() {
  if (typeof window === "undefined") return;
  const w = window as Window & { fbq?: (...args: unknown[]) => void };
  w.fbq?.("track", "Lead");
}

export function isPlaceholderId(value: string | undefined, needle: string) {
  if (!value) return true;
  const upper = value.toUpperCase();
  return (
    value.includes(needle) ||
    upper.includes("XXXX") ||
    upper.includes("PLACEHOLDER") ||
    value.includes("[")
  );
}
