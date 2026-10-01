"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, BookMarked, FolderGit2, GitBranch, Code } from "lucide-react";
import { FALLBACK_REPOS } from "@/data/repos";

export function TabNavigation() {
  const pathname = usePathname();

  const tabs = [
    { name: "Overview", href: "/", icon: BookOpen, count: null },
    { name: "Repositories", href: "/repositories", icon: BookMarked, count: FALLBACK_REPOS.length },
    { name: "Projects", href: "/projects", icon: FolderGit2, count: 2 },
    { name: "Experience", href: "/experience", icon: GitBranch, count: null },
    { name: "Skills", href: "/skills", icon: Code, count: null },
  ];

  return (
    <div className="sticky top-0 z-40 bg-background border-b border-border w-full mt-4 md:mt-0 pt-4 md:pt-8 px-4 md:px-0 flex gap-2 md:gap-4 overflow-x-auto no-scrollbar scroll-smooth">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href;
        
        return (
          <Link
            key={tab.name}
            href={tab.href}
            className={`flex items-center gap-2 pb-2 md:pb-3 px-2 text-sm whitespace-nowrap border-b-2 transition-colors ${
              isActive 
                ? "border-[#f78166] text-foreground font-semibold" 
                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            <tab.icon className={`h-4 w-4 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`} />
            {tab.name}
            {tab.count !== null && (
              <span className="ml-1 bg-secondary text-foreground text-xs py-0.5 px-2 rounded-full font-medium">
                {tab.count}
              </span>
            )}
          </Link>
        );
      })}
    </div>
  );
}
