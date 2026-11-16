import fs from 'node:fs';
import path from 'node:path';
const base = '/' + (process.env.GITHUB_REPOSITORY?.split('/')[1] || 'Sage-S2.1-Flash') + '/';
const out = '_site';
fs.rmSync(out,{recursive:true,force:true});
fs.cpSync('dist',out,{recursive:true});
const html = fs.readFileSync('dist/index.html','utf8');
const active = html.match(/src="\/assets\/([^" ]+\.js)"/)[1];
for(const name of fs.readdirSync(out+'/assets')) if(name.endsWith('.js')&&name!==active) fs.rmSync(out+'/assets/'+name);
function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(/\.(?:html|css|js)$/.test(p)){let s=fs.readFileSync(p,'utf8');s=s.replaceAll('/assets/',base+'assets/').replaceAll('/cases/',base+'cases/');fs.writeFileSync(p,s);}}}
walk(out);
fs.writeFileSync(out+'/.nojekyll','');
console.log('Pages build ready at '+base);
