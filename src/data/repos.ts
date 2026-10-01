export type Repository = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
};

export const FALLBACK_REPOS: Repository[] = [
  {
    id: 1251306554,
    name: "mcp-server-hub",
    description: "🔒 A safe-by-default, beginner-friendly hub for MCP servers. Connect AI IDEs like Claude Desktop and Cursor to real-world developer tools.",
    html_url: "https://github.com/kwaqtech/mcp-server-hub",
    stargazers_count: 2,
    language: "TypeScript",
    updated_at: "2026-09-14T20:08:59Z"
  },
  {
    id: 1268072473,
    name: "PRM393_MLM_Project",
    description: "Mobile application project built with Flutter and Dart.",
    html_url: "https://github.com/kwaqtech/PRM393_MLM_Project",
    stargazers_count: 1,
    language: "Dart",
    updated_at: "2026-07-16T01:20:00Z"
  },
  {
    id: 1188593442,
    name: "PriceGuard",
    description: "A robust price monitoring and guarding utility.",
    html_url: "https://github.com/kwaqtech/PriceGuard",
    stargazers_count: 1,
    language: "TypeScript",
    updated_at: "2026-03-22T10:35:01Z"
  },
  {
    id: 1179972883,
    name: "xom-connect",
    description: "Community connection platform built with modern web technologies.",
    html_url: "https://github.com/kwaqtech/xom-connect",
    stargazers_count: 1,
    language: "TypeScript",
    updated_at: "2026-03-28T02:38:03Z"
  }
];

export const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Dart: "#00B4AB",
  Csharp: "#178600",
  "C#": "#178600",
  HTML: "#e34c26",
  CSS: "#563d7c",
};
