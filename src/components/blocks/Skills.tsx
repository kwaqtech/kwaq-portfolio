import { SKILLS_DATA } from "@/data/skills";

export function Skills() {
  return (
    <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          {SKILLS_DATA.map((category) => (
            <div 
              key={category.title}
              className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-12 pb-6 border-b border-white/5 last:border-b-0 last:pb-0"
            >
              <h3 className="text-sm font-medium text-foreground w-full sm:w-32 shrink-0">
                {category.title}
              </h3>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {category.skills.join(" · ")}
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
