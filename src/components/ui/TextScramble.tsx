"use client";

import { useEffect, useState } from "react";

const CHARACTERS = "!<>-_\\\\/[]{}—=+*^?#________";

export function TextScramble({ text, delay = 0, className = "" }: { text: string; delay?: number; className?: string }) {
  const [displayText, setDisplayText] = useState(text);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setInView(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!inView) return;

    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [text, inView]);

  return <span className={className}>{inView ? displayText : " "}</span>;
}
