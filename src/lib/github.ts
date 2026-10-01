import { Repository, FALLBACK_REPOS } from "@/data/repos";

export async function getGithubRepositories(): Promise<Repository[]> {
  try {
    const res = await fetch(
      "https://api.github.com/users/kwaqtech/repos?per_page=100&sort=updated",
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      console.warn("GitHub API failed or rate-limited. Using fallback data.");
      return FALLBACK_REPOS;
    }

    const data = await res.json();
    
    // Filter out forks or specific repos if needed. 
    // We match the type structure expected by the UI.
    const mapped: Repository[] = data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      stargazers_count: repo.stargazers_count,
      language: repo.language,
      updated_at: repo.updated_at,
    }));

    // Optionally sort by stars or prioritize certain repos
    // Here we prioritize mcp-server-hub and PRM393_MLM_Project
    const priorityList = ["mcp-server-hub", "PRM393_MLM_Project", "PriceGuard", "xom-connect"];
    
    mapped.sort((a, b) => {
      const aIndex = priorityList.indexOf(a.name);
      const bIndex = priorityList.indexOf(b.name);
      
      if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
      if (aIndex !== -1) return -1;
      if (bIndex !== -1) return 1;
      return (b.stargazers_count || 0) - (a.stargazers_count || 0);
    });

    if (mapped.length === 0) {
      console.warn("GitHub API returned 0 repositories. Using fallback data.");
      return FALLBACK_REPOS;
    }

    return mapped.slice(0, 6); // Return top 6
  } catch (error) {
    console.warn("GitHub API fetch threw an error. Using fallback data.", error);
    return FALLBACK_REPOS;
  }
}
