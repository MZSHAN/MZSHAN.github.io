# mzshan.github.io

My personal site: an intro page and a blog.

Built with [Astro](https://astro.build) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `master`.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Writing a post

Copy `templates/post.md` to `src/content/blog/<slug>.md`, write it, set `draft: false`, push.

Posts live in `src/content/blog/`. Site details (name, role, links) are in `src/data/site.json`.

## Deployment

GitHub Pages must be set to build from the workflow, not from a branch:

> Settings -> Pages -> Build and deployment -> Source: **GitHub Actions**

## Archive

Notes from the previous version of this site are in `archive/old-notes/`. They are not built or
published.
