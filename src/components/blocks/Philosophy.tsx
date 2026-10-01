"use client";

import { motion } from "framer-motion";

const PHILOSOPHY_STEPS = [
  { id: "01", title: "Understand the Problem", description: "Context dictates architecture. Never write code without knowing why." },
  { id: "02", title: "Design the System", description: "Map out data flows, component boundaries, and failure states first." },
  { id: "03", title: "Build the Smallest Useful Thing", description: "Ship incrementally. Validate assumptions with real usage early." },
  { id: "04", title: "Measure", description: "Instrumentation is not optional. If it's not monitored, it's broken." },
  { id: "05", title: "Improve", description: "Refactor mercilessly. Leave the codebase cleaner than you found it." },
];

export function Philosophy() {
  return (
    <section className="flex flex-col gap-8 pt-12 border-t border-white/5">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">Engineering Philosophy</h2>
        <p className="text-sm text-muted-foreground max-w-lg">
          Writing code is easy. Building resilient, maintainable systems that solve actual human problems is hard. This is my framework.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
        {PHILOSOPHY_STEPS.map((step) => (
          <div key={step.id} className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10">
            <div className="text-xs font-mono text-muted-foreground mb-2">{step.id}</div>
            <h3 className="text-base font-bold text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
