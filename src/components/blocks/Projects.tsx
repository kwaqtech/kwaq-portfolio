"use client";

import { PROJECTS } from "@/data/projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section className="py-12" id="projects">
      <div className="flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">Projects</h2>
          <p className="text-muted-foreground text-sm max-w-lg">
            A selection of projects I&apos;ve worked on, ranging from full-stack platforms to backend infrastructure.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-white/5">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 border-b border-white/5 transition-colors hover:bg-white/[0.02] -mx-4 px-4 sm:-mx-8 sm:px-8 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12 w-full max-w-3xl">
                  <span className="text-xs font-mono text-muted-foreground font-medium shrink-0 w-8">
                    {(index + 1).toString().padStart(2, '0')}
                  </span>

                  <div className="flex flex-col gap-2 flex-1">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-2 shrink-0">
                  <div className="text-xs font-medium text-foreground">
                    {project.role}
                  </div>
                  <div className="text-[11px] font-mono text-muted-foreground flex gap-1.5 flex-wrap sm:justify-end">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={tech}>
                        {tech}{i < Math.min(2, project.techStack.length - 1) && " ·"}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 hidden sm:flex">
                  <ArrowUpRight className="h-5 w-5 text-accent" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

