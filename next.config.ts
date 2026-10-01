import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = '';
if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repoName = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '');
  if (repoName.toLowerCase() !== `${process.env.GITHUB_REPOSITORY_OWNER?.toLowerCase()}.github.io`) {
    repo = `/${repoName}`;
  }
}

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: repo || undefined,
  assetPrefix: repo || undefined,
};

export default nextConfig;
