import fs from 'node:fs';
// GitHub Pages serves the committed root of the ghpages branch.
for (const name of ['assets', 'cases', 'index.html', '.nojekyll']) {
  fs.cpSync('_site/' + name, name, {recursive: true, force: true});
}
console.log('Ready to commit and push the ghpages branch.');
