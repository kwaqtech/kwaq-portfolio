"use client";

import { IDENTITY } from "@/data/cv";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="w-full py-12 md:py-24 border-t border-white/5 bg-[#050505]">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
          <span className="text-2xl font-bold tracking-tighter text-foreground">KWAQ.</span>
          <span className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
            {IDENTITY.role} &copy; {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm font-mono tracking-widest uppercase text-muted-foreground">
          <a
            href="https://github.com/kwaqtech"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/minh-quang-cao-37b223333/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${IDENTITY.email}`}
            className="hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
