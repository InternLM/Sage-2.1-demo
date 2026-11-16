# 书生 · Sage S2.1 Flash

Bilingual release website with local demo media, interactive examples, and evaluation results.

Website: https://internlm.github.io/Sage-S2.1-Flash/

## Preview and build

Requires Node.js 20+ and Python 3 for local preview. No npm dependencies are needed.

```sh
npm run build
npm run check
npm run preview
```

Content: `CONTENT.md`, `CONTENT.en.md`, and `docs/sage-article.json`. Evaluation data: `docs/sage-evaluation.json` and `docs/sage-benchmarks.tsv`. Layout and behavior: `frontend/`. Demo media: `dist/cases/sage/`.

## GitHub Pages

GitHub Pages deploys directly from the root of the `ghpages` branch. The `main` branch contains the model card and technical report. Website source and local demo media are maintained here on `ghpages`.

After editing the website, run `npm run prepare:pages`, commit the source and generated root files (`index.html`, `assets/`, `cases/`, `.nojekyll`), and push `ghpages`. This command builds the repository base path and checks the website before copying the generated files to the deployment root. No object storage is required.

## Included demos

- CT reconstruction
- 3D modeling: architecture, turbofan engine, truck chassis
- Scientific analysis: microscopy, EEG, satellite imagery, scientific multimodal understanding
- Interactive scientific visualization: The Memory of Light and crystal structures

The page renderer is adapted from AtomInnoLab/atria_demo. Branding assets come from the Intern official website. Demo media and evaluation data were supplied for this release. Font license notices are retained in `dist/assets/fonts/`.
