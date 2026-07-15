# Critical Thinking in History

A responsive, content-first redesign for CriticalThinkingInHistory.com. It is built as a small Vite static site with a searchable resource library that links teachers directly to the existing curriculum pages.

## Local development

```bash
npm install
npm run dev
```

## Deployment

Pushing to `main` runs the included GitHub Pages workflow. In the repository settings, set **Pages** to use **GitHub Actions** as its source. For a custom domain, add the domain in the same Pages settings and configure its DNS there.

## Content updates

The homepage resource entries are maintained in `src/main.js`. Add new curriculum pages there with a title, category, summary, tags, and the existing canonical page path.
