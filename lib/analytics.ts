/**
 * ─────────────────────────────────────────────────────────────────────────────
 * ANALYTICS — pre-wired, provider-agnostic
 * ─────────────────────────────────────────────────────────────────────────────
 * Every meaningful interaction in this template already calls `track()`. You do
 * not have to go and add event code — you only have to point this file at your
 * provider.
 *
 * It works with whatever you already use, because they all expose a global:
 *
 *   Plausible → window.plausible(name, { props })
 *   Fathom    → window.fathom.trackEvent(name)
 *   PostHog   → window.posthog.capture(name, props)
 *   GA4       → window.gtag("event", name, props)
 *
 * All four are detected below. If none is present (local dev), events are
 * logged to the console instead so you can see the funnel working.
 *
 * Events this template fires out of the box:
 *   waitlist_submitted · cta_clicked · pricing_viewed · faq_opened · demo_requested
 */

type Props = Record<string, string | number | boolean>;

interface AnalyticsWindow extends Window {
  plausible?: (event: string, opts?: { props?: Props }) => void;
  fathom?: { trackEvent: (event: string) => void };
  posthog?: { capture: (event: string, props?: Props) => void };
  gtag?: (command: string, event: string, props?: Props) => void;
}

/** Whether to console.log events when no provider is installed. */
const DEBUG_WHEN_NO_PROVIDER = true;

export function track(event: string, props: Props = {}): void {
  if (typeof window === "undefined") return;

  const w = window as AnalyticsWindow;
  let delivered = false;

  try {
    if (typeof w.plausible === "function") {
      w.plausible(event, { props });
      delivered = true;
    }
    if (w.fathom?.trackEvent) {
      w.fathom.trackEvent(event);
      delivered = true;
    }
    if (w.posthog?.capture) {
      w.posthog.capture(event, props);
      delivered = true;
    }
    if (typeof w.gtag === "function") {
      w.gtag("event", event, props);
      delivered = true;
    }
  } catch {
    // Analytics must never break the page.
    return;
  }

  if (!delivered && DEBUG_WHEN_NO_PROVIDER) {
    // eslint-disable-next-line no-console
    console.info(`[analytics] ${event}`, props);
  }
}

/**
 * Fires once when an element scrolls into view. Used for section-view events
 * like `pricing_viewed`, which tell you where people actually drop off.
 */
export function trackOnceOnView(
  el: Element | null,
  event: string,
  props: Props = {},
): () => void {
  if (!el || typeof IntersectionObserver === "undefined") return () => {};

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          track(event, props);
          observer.disconnect();
        }
      }
    },
    { threshold: 0.4 },
  );

  observer.observe(el);
  return () => observer.disconnect();
}
