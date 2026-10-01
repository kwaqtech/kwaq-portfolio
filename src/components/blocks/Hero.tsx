"use client";

import { IDENTITY } from "@/data/cv";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-4"
      >
        <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full w-fit mb-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-xs font-medium text-accent tracking-wide">Available for new opportunities</span>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {IDENTITY.name}
          </h1>
          <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
            {IDENTITY.role}
          </h2>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="text-base text-muted-foreground leading-relaxed max-w-2xl"
      >
        I build practical software products across backend systems, full-stack applications, and product engineering.
        Currently focused on crafting resilient architectures and refined user interfaces.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="flex items-center gap-4 mt-2"
      >
        <a href="https://github.com/kwaqtech" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/minh-quang-cao-37b223333/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
          LinkedIn
        </a>
        <a href={`mailto:${IDENTITY.email}`} className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
          Email
        </a>
        <a href="#cv" className="flex items-center gap-2 text-sm font-medium text-foreground bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-4 py-2 rounded-md ml-2">
          Resume
        </a>
      </motion.div>
    </section>
  );
}
