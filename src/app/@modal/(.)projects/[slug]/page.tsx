import { notFound } from "next/navigation";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import ReactMarkdown from "react-markdown";
import { ModalWrapper } from "@/components/blocks/ModalWrapper";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyModal({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    notFound();
  }

  return (
    <ModalWrapper>
      {/* Repo Header */}
      <div className="border-b border-border mb-4 pb-4">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg font-medium text-accent">kwaqtech</span>
          <span className="text-lg text-muted-foreground">/</span>
          <span className="text-lg font-bold text-accent">{project.slug}</span>
          <span className="ml-2 text-[10px] font-medium border border-border rounded-full px-2 py-0.5 text-muted-foreground leading-none">
            Public
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map(tech => (
            <span key={tech} className="inline-flex items-center rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium text-accent ring-1 ring-inset ring-accent/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* README Content */}
      <div className="rounded-md border border-border bg-card overflow-hidden">
        <div className="flex items-center gap-2 border-b border-border bg-background px-4 py-2 sticky top-0 z-10">
          <span className="text-xs font-semibold text-foreground">README.md</span>
        </div>
        
        <article className="p-6 prose prose-invert prose-sm max-w-none prose-p:text-foreground prose-li:text-foreground prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-headings:border-b prose-headings:border-border prose-headings:pb-2">
          <ReactMarkdown>{project.content}</ReactMarkdown>
        </article>
      </div>
    </ModalWrapper>
  );
}
