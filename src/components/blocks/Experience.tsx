"use client";

import { EXPERIENCE_HISTORY } from "@/data/experience";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section className="py-12" id="experience">
      <div className="flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">Experience</h2>
        </motion.div>

        <div className="flex flex-col border-t border-white/5">
          {EXPERIENCE_HISTORY.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12 py-8 border-b border-white/5"
            >
              <div className="w-full md:w-32 shrink-0">
                <span className="text-sm font-mono text-muted-foreground">
                  {exp.period}
                </span>
              </div>
              
              <div className="flex flex-col gap-1 flex-1">
                <h3 className="text-base font-bold text-foreground">
                  {exp.company}
                </h3>
                <div className="text-sm text-muted-foreground font-medium mb-2">
                  {exp.role}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
