"use client";

import { Hero } from "@/components/blocks/Hero";
import { Projects } from "@/components/blocks/Projects";
import { Experience } from "@/components/blocks/Experience";
import { Skills } from "@/components/blocks/Skills";
import { Philosophy } from "@/components/blocks/Philosophy";
import { Readme } from "@/components/blocks/Readme";
import { motion } from "framer-motion";
import { TextScramble } from "@/components/ui/TextScramble";

const articles = [
  {
    title: "Building Resilient .NET Microservices",
    description: "Lessons learned from scaling ticketing systems under high load.",
    date: "Oct 2025",
    readTime: "5 min read",
    slug: "#"
  },
  {
    title: "Frontend Architecture in 2025",
    description: "Why we chose Next.js and Tailwind for our startup.",
    date: "Aug 2025",
    readTime: "4 min read",
    slug: "#"
  }
];

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-24 w-full pb-24">
      <section id="hero" className="scroll-mt-24">
        <Hero />
      </section>

      <section id="about" className="scroll-mt-24 flex flex-col gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            <TextScramble text="About" />
          </h2>
          <div className="text-base text-muted-foreground leading-relaxed max-w-2xl flex flex-col gap-4">
            <p>
              I am a Software Engineer based in Ho Chi Minh City, Vietnam. I specialize in building resilient backend architectures and refined, user-centric frontend applications.
            </p>
            <p>
              My engineering approach is heavily focused on understanding the core business problem before writing any code. I believe in shipping incremental value, measuring the impact, and refining the system continuously.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
            <TextScramble text="Current Interests" delay={100} />
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li className="flex gap-4"><span className="text-foreground font-medium w-32 shrink-0">Systems</span> Distributed systems & scalable backend architecture</li>
            <li className="flex gap-4"><span className="text-foreground font-medium w-32 shrink-0">Product</span> Rapid prototyping & startup operations</li>
            <li className="flex gap-4"><span className="text-foreground font-medium w-32 shrink-0">Interface</span> Interaction design & high-performance frontend engineering</li>
          </ul>
        </motion.div>
        
        <Philosophy />
      </section>

      <section id="projects" className="scroll-mt-24">
        <Projects />
      </section>

      <section id="experience" className="scroll-mt-24">
        <Experience />
      </section>

      <section id="skills" className="scroll-mt-24">
        <Skills />
      </section>

      <section id="writing" className="scroll-mt-24 flex flex-col gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            <TextScramble text="Writing" />
          </h2>
          <p className="text-sm text-muted-foreground max-w-lg">
            A collection of technical notes, architecture thoughts, and product engineering lessons.
          </p>
        </motion.div>

        <div className="flex flex-col border-t border-white/5 mt-4">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex flex-col md:flex-row md:items-baseline justify-between gap-4 py-6 border-b border-white/5 hover:bg-white/[0.02] -mx-4 px-4 sm:-mx-8 sm:px-8 rounded-xl transition-colors"
            >
              <div className="flex flex-col gap-1.5 flex-1">
                <h3 className="text-base font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {article.description}
                </p>
              </div>
              
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground shrink-0">
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>
      
      <section id="cv" className="scroll-mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            <TextScramble text="Curriculum Vitae" />
          </h2>
          <Readme />
        </motion.div>
      </section>
    </div>
  );
}
