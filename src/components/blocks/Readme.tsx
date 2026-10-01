"use client";

import { BookOpen, Download } from "lucide-react";
import { README_CONTENT } from "@/data/cv";

export function Readme() {
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = "CaoMinhQuangCV.pdf";
    a.download = "CaoMinhQuangCV.pdf";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 text-sm font-medium text-foreground bg-white/5 border border-white/10 hover:bg-white/10 transition-colors px-4 py-2 rounded-md"
        >
          <Download className="w-4 h-4" />
          Download CV
        </button>
      </div>
      <div className="rounded-md border border-border bg-card overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-2 sticky top-0 z-10">
          <span className="text-xs font-semibold text-foreground">kwaqtech</span>
          <span className="text-xs text-muted-foreground">/</span>
          <span className="text-xs font-semibold text-foreground">README.md</span>
        </div>

        {/* Content */}
        <div className="p-8 prose prose-invert max-w-none prose-p:text-foreground prose-li:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-headings:border-b prose-headings:border-border prose-headings:pb-2">
          <h1>Hi, I'm Cao Minh Quang</h1>

          <p>
            I'm a Full-Stack Software Engineer focused on building scalable, production-grade applications.
            My engineering philosophy bridges the gap between complex business logic and exceptional user experiences.
          </p>

          <p>Currently, my core focus revolves around:</p>

          <ul>
            <li>
              <strong>Backend Architecture:</strong> Designing high-volume RESTful APIs and resolving performance bottlenecks (C#, .NET 8, SQL Server).
            </li>
            <li>
              <strong>Frontend Engineering:</strong> Architecting fluid, responsive interfaces using Next.js, React, and Tailwind CSS.
            </li>
            <li>
              <strong>Product Engineering:</strong> I don't just write code; I build products. As a co-founder of Presist, I managed end-to-end delivery from core technical implementations to establishing corporate partnerships (e.g., Sony Vietnam).
            </li>
          </ul>

          <p>
            I thrive in environments that require both deep technical problem-solving and a strong understanding of product strategy.
          </p>
        </div>
      </div>
    </div>
  );
}
