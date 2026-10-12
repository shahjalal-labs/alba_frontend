"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

type TrustlocalWidgetProps = {
  showHeader?: boolean;
  containerClassName?: string;
  widgetClassName?: string;
  background?: "white" | "transparent";
};

export default function TrustlocalWidget({
  showHeader = true,
  containerClassName,
  widgetClassName,
  background = "white",
}: TrustlocalWidgetProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasReviews, setHasReviews] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let fallbackTimeoutId: ReturnType<typeof setTimeout> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          timeoutId = setTimeout(() => {
            setShouldLoad(true);
          }, 500);
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px" },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (timeoutId) clearTimeout(timeoutId);
      if (fallbackTimeoutId) clearTimeout(fallbackTimeoutId);
    };
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const node = containerRef.current?.querySelector(
      ".trustlocal-widget",
    ) as HTMLDivElement | null;

    if (!node) return;

    const refreshState = () => {
      const hasWidgetContent = node.childElementCount > 0 || node.innerHTML.trim().length > 0;
      if (hasWidgetContent) {
        setHasReviews(true);
      }
    };

    refreshState();

    const observer = new MutationObserver(refreshState);
    observer.observe(node, { childList: true, subtree: true, characterData: true });

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className={containerClassName || "mb-8 max-w-[500px] rounded-2xl p-3"}
    >
      {shouldLoad ? (
        <Script
          src="https://static.trustlocal.de/widget/widget_v2.js"
          strategy="afterInteractive"
        />
      ) : null}

      <div className="min-h-[76px] overflow-hidden rounded-lg">
        <div
          className={widgetClassName || "trustlocal-widget min-h-[76px]"}
          data-id="2kbDZMuKU_yWwR_f_pi6j0vHitek3oW64siUjdKr-BzDUA"
          data-language-code="de"
          data-country-code="DE"
          data-badge="default"
          data-quote="hidden"
          data-size="small"
          data-type="landscape"
          data-border="shadow"
          data-theme="light"
          data-background={background}
          data-google="default"
        />

        {!hasReviews ? (
          <div
            className="flex min-h-[76px] w-full items-center gap-3 rounded-lg border border-gray-200/60 bg-gray-50/80 px-4"
            aria-hidden="true"
          >
            <div className="h-4 w-4 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-3 flex-1 rounded-full bg-gray-200 animate-pulse" />
            <div className="h-3 w-16 rounded-full bg-gray-200 animate-pulse" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
