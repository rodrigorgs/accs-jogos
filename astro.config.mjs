import { defineConfig } from 'astro/config';

const [owner, repository] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === 'true' && owner && repository;
const isUserOrOrganizationSite = repository?.endsWith('.github.io');

export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  site: isGitHubPagesBuild ? `https://${owner}.github.io` : undefined,
  base: isGitHubPagesBuild && !isUserOrOrganizationSite ? `/${repository}` : '/',
});
