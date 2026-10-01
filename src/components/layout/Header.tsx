"use client";

import Link from "next/link";
import { Search, TerminalSquare } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TerminalModal } from "@/components/ui/terminal-modal";

const NAV_LINKS = [
  { name: "About", href: "/#about", section: "about" },
  { name: "Projects", href: "/#projects", section: "projects" },
  { name: "Experience", href: "/#experience", section: "experience" },
  { name: "Skills", href: "/#skills", section: "skills" },
  { name: "Writing", href: "/#writing", section: "writing" },
  { name: "CV", href: "/#cv", section: "cv" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [isTerminalOpen, setTerminalOpen] = useState(false);
  const isManualScrolling = useRef(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (isManualScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    NAV_LINKS.forEach((link) => {
      const element = document.getElementById(link.section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string, section: string) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push(href);
    } else {
      setActiveSection(section);

      isManualScrolling.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        isManualScrolling.current = false;
      }, 1000);

      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.location.hash = section;
      } else if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Remove hash from URL without reloading
        window.history.pushState(null, "", window.location.pathname);
      }
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-4xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <Link
            href="/"
            onClick={(e) => handleNav(e, "/", "")}
            className="text-sm font-medium tracking-wide text-foreground hover:text-accent transition-colors duration-300 relative z-10"
          >
            KWAQ
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNav(e, link.href, link.section)}
                  className={`relative px-3 py-1.5 text-sm transition-colors rounded-md flex items-center justify-center outline-none ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="header-active-tab"
                      className="absolute inset-0 bg-white/10 rounded-md"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </Link>
              );
            })}

            <button
              onClick={() => setTerminalOpen(true)}
              className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors w-8 h-8 rounded-md hover:bg-white/5 ml-2"
              aria-label="Open Terminal"
            >
              <TerminalSquare className="h-4 w-4" />
            </button>

            <button
              onClick={() => document.dispatchEvent(new Event('open-command-palette'))}
              className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors w-8 h-8 rounded-md hover:bg-white/5"
              aria-label="Open Command Menu"
            >
              <Search className="h-4 w-4" />
            </button>
          </nav>

          {/* Mobile Command Trigger */}
          <div className="md:hidden flex items-center gap-1">
            <button
              onClick={() => setTerminalOpen(true)}
              className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors w-8 h-8 rounded-md hover:bg-white/5"
              aria-label="Open Terminal"
            >
              <TerminalSquare className="h-4 w-4" />
            </button>
            <button
              onClick={() => document.dispatchEvent(new Event('open-command-palette'))}
              className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors w-8 h-8 rounded-md hover:bg-white/5"
              aria-label="Open Command Menu"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <TerminalModal open={isTerminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}

