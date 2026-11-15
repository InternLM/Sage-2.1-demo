# 书生 · Sage 2.1 Flash

Bilingual release website with local demo media, interactive examples, and evaluation results.

Website: https://namespace-eri.github.io/sage-2.1-demo/

## Preview and build

Requires Node.js 20+ and Python 3 for local preview. No npm dependencies are needed.

```sh
npm run build
npm run check
npm run preview
```

Content: `CONTENT.md`, `CONTENT.en.md`, and `docs/sage-article.json`. Evaluation data: `docs/sage-evaluation.json` and `docs/sage-benchmarks.tsv`. Layout and behavior: `frontend/`. Demo media: `dist/cases/sage/`.

## GitHub Pages

The Pages workflow builds `_site/` with the repository base path and publishes it on pushes to `main`. Videos and the interactive HTML demo are hosted alongside the site; no object storage is required.

## Included demos

- CT reconstruction
- 3D modeling: architecture, turbofan engine, truck chassis
- Scientific software: microscopy, EEG, satellite imagery
- The Memory of Light interactive HTML

The page renderer is adapted from AtomInnoLab/atria_demo. Branding assets come from the Intern official website. Demo media and evaluation data were supplied for this release. Font license notices are retained in `dist/assets/fonts/`.
