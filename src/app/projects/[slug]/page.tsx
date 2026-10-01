import { notFound } from "next/navigation";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  return (
    <main className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-24 flex flex-col gap-16 min-h-screen">
      <div className="flex flex-col gap-8 border-b border-white/5 pb-12">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-fit">
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
        
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">{project.title}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">{project.shortDescription}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 mt-4 border-t border-white/5">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">Role</span>
            <span className="text-sm font-medium text-foreground">{project.role}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">Timeline</span>
            <span className="text-sm font-medium text-foreground">{project.period}</span>
          </div>
          <div className="flex flex-col gap-2 col-span-2 md:col-span-2">
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">Technologies</span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="text-sm font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="prose prose-invert prose-p:text-muted-foreground prose-headings:text-foreground prose-li:text-muted-foreground max-w-none prose-headings:font-semibold prose-h3:text-xl prose-h3:mt-12 prose-h3:mb-6 prose-p:leading-relaxed prose-p:text-base prose-li:text-base prose-hr:border-white/5">
        <ReactMarkdown>{project.content}</ReactMarkdown>
      </div>

      {project.metrics && project.metrics.length > 0 && (
        <div className="flex flex-col gap-6 pt-12 border-t border-white/5">
          <h3 className="text-xl font-semibold text-foreground">Key Outcomes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.metrics.map(metric => (
              <div key={metric} className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-sm font-medium text-foreground">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
