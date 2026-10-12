"use client";

import React, { useEffect, useState } from "react";

type MotionProps = React.PropsWithChildren<React.HTMLAttributes<HTMLElement>> & {
  initial?: unknown;
  animate?: unknown;
  whileInView?: unknown;
  variants?: unknown;
  transition?: unknown;
  viewport?: unknown;
  exit?: unknown;
};

function createMotionElement(tag: keyof JSX.IntrinsicElements) {
  return React.forwardRef<HTMLElement, MotionProps>(function MotionElement(
    { children, ...props },
    ref,
  ) {
    return React.createElement(tag, { ...props, ref }, children);
  });
}

const motion = {
  a: createMotionElement("a"),
  article: createMotionElement("article"),
  button: createMotionElement("button"),
  div: createMotionElement("div"),
  footer: createMotionElement("footer"),
  h1: createMotionElement("h1"),
  h2: createMotionElement("h2"),
  h3: createMotionElement("h3"),
  header: createMotionElement("header"),
  img: createMotionElement("img"),
  li: createMotionElement("li"),
  main: createMotionElement("main"),
  ol: createMotionElement("ol"),
  p: createMotionElement("p"),
  section: createMotionElement("section"),
  span: createMotionElement("span"),
  svg: createMotionElement("svg"),
  ul: createMotionElement("ul"),
} as const;

export { motion };

export function AnimatePresence({ children }: React.PropsWithChildren) {
  return <>{children}</>;
}

export function useInView(
  ref: React.RefObject<Element | null>,
  options?: IntersectionObserverInit & { once?: boolean },
) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsInView(true);
          if (options?.once !== false) {
            observer.disconnect();
          }
        }
      },
      options,
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [options, ref]);

  return isInView;
}