import Link from "next/link";
import { Star, BookMarked } from "lucide-react";
import { LANGUAGE_COLORS, Repository } from "@/data/repos";
import { getGithubRepositories } from "@/lib/github";

export function RepoCard({ repo }: { repo: Repository }) {
  const languageColor = repo.language ? LANGUAGE_COLORS[repo.language] || "#8b949e" : "#8b949e";
  
  return (
    <div className="flex flex-col justify-between p-4 h-full rounded-md border border-border bg-card transition-colors">
      <div>
        <div className="flex items-center gap-2 mb-1">
          <Link 
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-accent text-[15px] hover:underline"
          >
            {repo.name}
          </Link>
          <span className="text-xs font-medium border border-border rounded-full px-2 py-0.5 text-muted-foreground leading-none">
            Public
          </span>
        </div>
        <p className="text-xs text-muted-foreground line-clamp-3 mb-4 mt-2">
          {repo.description || "No description provided."}
        </p>
      </div>
      
      <div className="flex items-center gap-4 text-xs text-muted-foreground mt-auto">
        {repo.language && (
          <div className="flex items-center gap-1.5">
            <span 
              className="h-3 w-3 rounded-full" 
              style={{ backgroundColor: languageColor }}
            />
            <span>{repo.language}</span>
          </div>
        )}
        {repo.stargazers_count > 0 && (
          <Link href={`${repo.html_url}/stargazers`} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-accent transition-colors">
            <Star className="h-4 w-4" />
            <span>{repo.stargazers_count}</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export async function Repositories() {
  const repos = await getGithubRepositories();

  return (
    <section className="mb-8" id="repositories">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map(repo => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </section>
  );
}
