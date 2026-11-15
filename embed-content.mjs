import fs from "node:fs";
import { createHash } from "node:crypto";
const applySiteMetadata = html => html;
import { assertEnglishContent } from "./scripts/check-locales.mjs";

const indexPath = new URL("./dist/index.html", import.meta.url);
const index = fs.readFileSync(indexPath, "utf8");
const scriptMatch = index.match(/src="\/assets\/([^\"]+\.js)"/);
if (!scriptMatch) {
  throw new Error("Unable to locate the main JavaScript asset in dist/index.html");
}
const bundlePath = new URL("./template/renderer.js", import.meta.url);
const contentPath = new URL("./CONTENT.md", import.meta.url);
let bundle = fs.readFileSync(bundlePath, "utf8");
const normalizeBranding = (source) => source
  .replaceAll("Atria-Dawn Preview", "Atria Dawn Preview")
  .replaceAll("ATRIA-Dawn", "Atria Dawn Preview")
  .replaceAll("ATIRA-Dawn", "Atria Dawn Preview");
const content = normalizeBranding(fs.readFileSync(contentPath, "utf8").trimEnd());
const englishContent = normalizeBranding(fs.readFileSync(new URL("./CONTENT.en.md", import.meta.url), "utf8").trimEnd());
assertEnglishContent(englishContent, "releases/atria-dawn/CONTENT.en.md");
const siteCitationBibtex = fs.readFileSync(new URL("./citation.bib", import.meta.url), "utf8").trimEnd();
const languageSource = fs.readFileSync(new URL("./frontend/site-language.js", import.meta.url), "utf8");
const metallicLogoStartMarker = "\nconst metallicLogoStart = true;\n";
const metallicLogoEndMarker = "\nconst metallicLogoEnd = true;\n";
const metallicLogoSource = metallicLogoStartMarker + fs.readFileSync(new URL("./frontend/metallic-logo.js", import.meta.url), "utf8") + metallicLogoEndMarker;
const languageStartMarker = "\nconst siteLanguageStart = true;\n";
const languageEndMarker = "\nconst siteLanguageEnd = true;\n";
const languageStart = bundle.indexOf(languageStartMarker);
if (languageStart >= 0) {
  const languageEnd = bundle.indexOf(languageEndMarker, languageStart);
  if (languageEnd < 0) throw new Error("Unable to locate the language block end");
  bundle = bundle.slice(0, languageStart) + bundle.slice(languageEnd + languageEndMarker.length);
}
const metallicLogoStart = bundle.indexOf(metallicLogoStartMarker);
if (metallicLogoStart >= 0) {
  const metallicLogoEnd = bundle.indexOf(metallicLogoEndMarker, metallicLogoStart);
  if (metallicLogoEnd < 0) throw new Error("Unable to locate the metallic logo block end");
  bundle = bundle.slice(0, metallicLogoStart) + bundle.slice(metallicLogoEnd + metallicLogoEndMarker.length);
}
bundle = bundle.replace("children:x.jsx(SiteApp,{})", "children:x.jsx(Qv,{})");

if (content.includes("`") || englishContent.includes("`")) {
  throw new Error("CONTENT.md files cannot contain a backtick because they are embedded in template literals");
}

const contentStartMarker = "const Hv=`";
const contentEndMarker = "`,En=Wv(Hv);";
const contentStart = bundle.indexOf(contentStartMarker);
const contentEnd = bundle.indexOf(contentEndMarker, contentStart + contentStartMarker.length);
if (contentStart < 0 || contentEnd < 0) {
  throw new Error("Unable to locate embedded content markers");
}
bundle =
  bundle.slice(0, contentStart + contentStartMarker.length) +
  content +
  bundle.slice(contentEnd);

// Keep a theme's closing copy after its case media, rather than treating it as
// the final case's lead paragraph. @outro applies until the next theme heading.
const parseContentWithOutro = function Wv(source) {
  const mainLines = [];
  const outros = new Map();
  let themeIndex = -1;
  let collectingOutro = false;
  for (const line of source.split("\n")) {
    if (/^##\s+/.test(line.trim())) {
      themeIndex++;
      collectingOutro = false;
    }
    if (line.trim() === "@outro" && themeIndex >= 0) {
      collectingOutro = true;
      continue;
    }
    if (collectingOutro) {
      if (!outros.has(themeIndex)) outros.set(themeIndex, []);
      outros.get(themeIndex).push(line);
    } else mainLines.push(line);
  }
  const parsed = parseOriginalContent(mainLines.join("\n"));
  for (const [index, lines] of outros) {
    parsed.themes[index].outro = lines.filter(line => line.trim()).map(line => Or(line)).join("<br/>");
  }
  return parsed;
}.toString();
if (!bundle.includes("function Wv(e){")) throw new Error("Unable to locate the content parser");
bundle = bundle.replace("function Wv(e){", `${parseContentWithOutro}\nfunction parseOriginalContent(e){`);

const sparseParticleConfig = "particleCount:650,particleSpread:9";
const denseParticleConfig = "particleCount:1050,particleSpread:9";
if (bundle.includes(sparseParticleConfig)) {
  bundle = bundle.replace(sparseParticleConfig, denseParticleConfig);
}

const fullParticlePixelRatio = 'pixelRatio:typeof window<"u"?Math.min(window.devicePixelRatio,2):1';
const reducedParticlePixelRatio = 'pixelRatio:typeof window<"u"?Math.min(window.devicePixelRatio,1.5):1';
if (bundle.includes(fullParticlePixelRatio)) {
  bundle = bundle.replace(fullParticlePixelRatio, reducedParticlePixelRatio);
}

const continuousParticleLoop = 'let Q,O=performance.now(),be=0;const wn=he=>{Q=requestAnimationFrame(wn);const C=he-O;O=he,be+=C*n,j.uniforms.uTime.value=be*.001,i?(D.position.x=-p.current.x*l,D.position.y=-p.current.y*l):(D.position.x=0,D.position.y=0),c||(D.rotation.x=Math.sin(be*2e-4)*.1,D.rotation.y=Math.cos(be*5e-4)*.15,D.rotation.z+=.01*n),k.render({scene:D,camera:m})};return Q=requestAnimationFrame(wn),()=>{window.removeEventListener("resize",y),i&&v.removeEventListener("mousemove",w),cancelAnimationFrame(Q),v.contains(g.canvas)&&v.removeChild(g.canvas)}';
const visibleParticleLoop = 'let Q,O=performance.now(),be=0,Pe=!1;const wn=he=>{if(!Pe)return;Q=requestAnimationFrame(wn);const C=he-O;O=he,be+=C*n,j.uniforms.uTime.value=be*.001,i?(D.position.x=-p.current.x*l,D.position.y=-p.current.y*l):(D.position.x=0,D.position.y=0),c||(D.rotation.x=Math.sin(be*2e-4)*.1,D.rotation.y=Math.cos(be*5e-4)*.15,D.rotation.z+=.01*n),k.render({scene:D,camera:m})},Re=new IntersectionObserver(([he])=>{const C=he.isIntersecting;C!==Pe&&(Pe=C,C?(O=performance.now(),Q=requestAnimationFrame(wn)):Q&&cancelAnimationFrame(Q))},{threshold:0});return Re.observe(v),()=>{Re.disconnect(),window.removeEventListener("resize",y),i&&v.removeEventListener("mousemove",w),cancelAnimationFrame(Q),v.contains(g.canvas)&&v.removeChild(g.canvas)}';
if (bundle.includes(continuousParticleLoop)) {
  bundle = bundle.replace(continuousParticleLoop, visibleParticleLoop);
}

const storyParticleStart = bundle.indexOf("A0=`");
const storyParticleEnd = bundle.indexOf("function I0", storyParticleStart);
if (storyParticleStart < 0 || storyParticleEnd < 0) {
  throw new Error("Unable to locate the original WebGL particle renderer");
}
const storyParticleRenderer = `A0=\`
  attribute vec3 position;
  attribute vec3 logo;
  attribute vec3 sides;
  attribute vec4 random;
  attribute vec3 color;
  attribute float particleSize;
  attribute float logoOnly;

  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSpread;
  uniform float uBaseSize;
  uniform float uSizeRandomness;
  uniform float uLogoMix;
  uniform float uSideMix;
  uniform float uFade;

  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vRandom = random;
    vColor = color;

    vec3 cloudPos = position * uSpread;
    cloudPos.z *= 10.0;
    vec3 pos = mix(cloudPos, sides, uSideMix);
    pos = mix(pos, logo, uLogoMix);

    vec4 mPos = modelMatrix * vec4(pos, 1.0);
    // Opening motion from Preview commit 3cf4e45, before the static-fade change.
    float t = uTime;
    float motionWeight = mix(1.0, 0.35, uSideMix) * (1.0 - uLogoMix);
    mPos.x += sin(t * random.z + 6.28 * random.w) * mix(0.1, 1.5, random.x) * motionWeight;
    mPos.y += sin(t * random.y + 6.28 * random.x) * mix(0.1, 1.5, random.w) * motionWeight;
    mPos.z += sin(t * random.w + 6.28 * random.y) * mix(0.1, 1.5, random.z) * motionWeight;
    vec4 mvPos = viewMatrix * mPos;
    float originalScale = uSizeRandomness == 0.0 ? 1.0 : 1.0 + uSizeRandomness * (random.x - 0.5);
    float sizeScale = mix(originalScale, particleSize, max(uLogoMix, uSideMix));
    float presence = mix(1.0 - logoOnly, 1.0, uLogoMix);
    float fadeScale = 1.0 - smoothstep(0.10, 1.0, uFade) * (0.16 + random.x * 0.24);
    gl_PointSize = (uBaseSize * sizeScale * presence * fadeScale) / length(mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
\`,N0=\`
  precision highp float;

  uniform float uAlphaParticles;
  uniform float uFade;
  varying vec4 vRandom;
  varying vec3 vColor;

  void main() {
    vec2 uv = gl_PointCoord.xy;
    float d = length(uv - vec2(0.5));
    float circle = (1.0 - smoothstep(0.39, 0.50, d)) * 0.94;
    float fadeStart = max(0.0, vRandom.w * 0.50 - 0.06);
    float particleFade = 1.0 - smoothstep(fadeStart, min(1.0, fadeStart + 0.50), uFade);
    if(uAlphaParticles < 0.5) {
      if(d > 0.5) { discard; }
      gl_FragColor = vec4(vColor, particleFade);
    } else {
      gl_FragColor = vec4(vColor, circle * particleFade);
    }
  }
\`,L0=
({particleCount:e=200,particleSpread:t=10,speed:n=.1,particleColors:r,moveParticlesOnHover:i=!1,particleHoverFactor:l=1,alphaParticles:s=!1,particleBaseSize:o=100,sizeRandomness:a=1,cameraDistance:u=20,disableRotation:c=!1,pixelRatio:h=1,className:f,story:d=!1,logoUrl:p="/assets/atria-logo.png?v=20260909"})=>{const v=q.useRef(null),k=q.useRef({x:0,y:0});return q.useEffect(()=>{const g=v.current;if(!g)return;let m=!1,y=0,w=0,S=0,_=0,T=0,A=null,I=null,L=null,j=null,D=null,Q=null,O=null,be=null;const Pe=R=>R<.5?4*R*R*R:1-Math.pow(-2*R+2,3)/2,wn=(R,M,K)=>Math.min(Math.max((R-M)/(K-M),0),1),Re=()=>new Promise(R=>{if(!d)return R([]);const M=new Image;M.onload=()=>{const K=document.createElement("canvas"),ne=180,kn=Math.max(1,Math.round(ne*M.height/M.width));K.width=ne,K.height=kn;const J=K.getContext("2d",{willReadFrequently:!0});J.drawImage(M,0,0,ne,kn);const ce=J.getImageData(0,0,ne,kn).data,oe=[];for(let B=0;B<kn;B+=2)for(let F=0;F<ne;F+=2)ce[(B*ne+F)*4+3]>48&&oe.push([F/ne,B/kn]);R(oe)},M.onerror=()=>R([]),M.src=p}),he=async()=>{const R=await Re();if(m)return;const M=new _m({dpr:h,depth:!1,alpha:!0}),K=M.gl;A=M,I=K,g.appendChild(K.canvas),K.clearColor(0,0,0,0);const ne=new f0(K,{fov:15});L=ne,ne.position.set(0,0,u);const kn=()=>{const B=g.clientWidth,F=g.clientHeight;M.setSize(B,F),ne.perspective({aspect:K.canvas.width/K.canvas.height}),Q()};window.addEventListener("resize",kn,!1);const J=B=>{const F=g.getBoundingClientRect(),G=(B.clientX-F.left)/F.width*2-1,Y=-((B.clientY-F.top)/F.height*2-1);k.current={x:G,y:Y}};(d?window:g).addEventListener("mousemove",J,{passive:!0});const ce=e,oe=new Float32Array(ce*3),H=new Float32Array(ce*3),z=new Float32Array(ce*3),V=new Float32Array(ce*4),W=new Float32Array(ce*3),ee=r&&r.length>0?r:T0;for(let B=0;B<ce;B++){let F,G,Y,fe;do F=Math.random()*2-1,G=Math.random()*2-1,Y=Math.random()*2-1,fe=F*F+G*G+Y*Y;while(fe>1||fe===0);const le=Math.cbrt(Math.random());oe.set([F*le,G*le,Y*le],B*3),V.set([Math.random(),Math.random(),Math.random(),Math.random()],B*4);const ue=C0(ee[Math.floor(Math.random()*ee.length)]);W.set(ue,B*3);const Se=R.length?R[Math.floor(Math.random()*R.length)]:[.5+.34*Math.cos(B/ce*6.283),.5+.34*Math.sin(B/ce*6.283)];H.set([(Se[0]-.5)*2.15,(.5-Se[1])*2.02+.86,(Math.random()-.5)*.28],B*3);const ge=B%2===0?-1:1;z.set([ge*(2.55+Math.random()*1.55),(Math.random()*2-1)*2.2,(Math.random()*2-1)*8],B*3)}const se=new mm(K,{position:{size:3,data:oe},logo:{size:3,data:H},sides:{size:3,data:z},random:{size:4,data:V},color:{size:3,data:W}}),re=new vm(K,{vertex:A0,fragment:N0,uniforms:{uTime:{value:0},uSpread:{value:t},uBaseSize:{value:o*h},uSizeRandomness:{value:a},uAlphaParticles:{value:s?1:0},uLogoMix:{value:d?1:0},uSideMix:{value:0}},transparent:!0,depthTest:!1}),te=new E0(K,{mode:K.POINTS,geometry:se,program:re});j=re,D=te;let fadeEnd=window.innerHeight*.32;const measureFade=()=>{const F=window.innerHeight,G=document.querySelector(".hero"),le=G?Math.max(F*.72,G.offsetTop+G.offsetHeight-F):F*.8;fadeEnd=Math.max(F*.30,le*.32)};const ae=()=>{const B=window.scrollY,fade=Pe(wn(B,fadeEnd*.04,fadeEnd));re.uniforms.uLogoMix.value=d?1:0,re.uniforms.uSideMix.value=0,re.uniforms.uFade.value=d?fade:0;const Be=.92*(1-Pe(wn(fade,.72,1)));g.style.opacity=Be.toFixed(3),g.style.visibility=fade>.995?"hidden":"visible",g.dataset.stage=fade>.995?"hidden":"logo"};Q=()=>{measureFade(),ae()};const ke
=()=>{y||(y=requestAnimationFrame(()=>{y=0,ae()}))};window.addEventListener("scroll",ke,{passive:!0}),kn(),ae();let xe=performance.now(),Ie=0;const $e=B=>{if(m)return;w=requestAnimationFrame($e);const F=B-xe;xe=B,Ie+=F*n,re.uniforms.uTime.value=Ie*.001;const G=re.uniforms.uLogoMix.value,Y=re.uniforms.uSideMix.value,fe=1-Math.max(G,Y);i?(te.position.x=-k.current.x*l*fe,te.position.y=-k.current.y*l*fe):(te.position.x=0,te.position.y=0),c||(te.rotation.x=Math.sin(Ie*2e-4)*.1*fe,te.rotation.y=Math.cos(Ie*5e-4)*.15*fe,te.rotation.z+=.01*n*fe),M.render({scene:te,camera:ne})};w=requestAnimationFrame($e),O={resize:kn,mousemove:J,scroll:ke,moveTarget:d?window:g}},he();return()=>{m=!0,y&&cancelAnimationFrame(y),w&&cancelAnimationFrame(w),window.removeEventListener("scroll",O&&O.scroll),window.removeEventListener("resize",O&&O.resize),O&&O.moveTarget&&O.moveTarget.removeEventListener("mousemove",O.mousemove),I&&g.contains(I.canvas)&&g.removeChild(I.canvas)}},[e,t,n,r,i,l,s,o,a,u,c,h,d,p]),x.jsx("div",{ref:v,className:"particles-container "+(f||"")})};`;
const normalizedStoryParticleRenderer = storyParticleRenderer
  .replace("uAlphaParticles:{value:s?1:0},uLogoMix", "uAlphaParticles:{value:s?1:0},uFade:{value:0},uLogoMix")
  .replace("R[Math.floor(Math.random()*R.length)]", "R[Math.floor(B*R.length/ce)%R.length]")
  .replace("const ce=e,oe=new Float32Array(ce*3),H=new Float32Array(ce*3),z=new Float32Array(ce*3),V=new Float32Array(ce*4),W=new Float32Array(ce*3)", "let seed=1831565813;const rand=()=>{seed+=1831565813;let R=seed;return R=Math.imul(R^R>>>15,R|1),R^=R+Math.imul(R^R>>>7,R|61),((R^R>>>14)>>>0)/4294967296};const ce=e,oe=new Float32Array(ce*3),H=new Float32Array(ce*3),z=new Float32Array(ce*3),V=new Float32Array(ce*4),W=new Float32Array(ce*3),P=new Float32Array(ce),X=new Float32Array(ce)")
  .replace("V.set([Math.random(),Math.random(),Math.random(),Math.random()],B*4);", "V.set([Math.random(),Math.random(),Math.random(),Math.random()],B*4);const sizeRoll=Math.random();P[B]=sizeRoll<.03?2.05+Math.random()*.4:sizeRoll<.14?1.18+Math.random()*.42:.5+Math.random()*.4;X[B]=B<800?0:1;")
  .replace("(Se[0]-.5)*2.15", "(Se[0]-.5)*(window.innerWidth<721?1.16:1.72)")
  .replace("(.5-Se[1])*2.02+.86", "(.5-Se[1])*(window.innerWidth<721?1.10:1.62)+(window.innerWidth<721?1.36:.88)")
  .replace("(Math.random()-.5)*.28", "(Math.random()-.5)*(window.innerWidth<721?.05:.08)")
  .replace("random:{size:4,data:V},color:{size:3,data:W}", "random:{size:4,data:V},color:{size:3,data:W},particleSize:{size:1,data:P},logoOnly:{size:1,data:X}")
  .replace('["#342d3b","#4a414f","#625967","#827985"]', '["#123563","#17467d","#225a9c","#3972b8"]')
  .replace("te.rotation.z+=.01*n*fe", "te.rotation.z=0")
  .replace("y=0,ae()", "y=0,ae(),be&&be()")
  .replace("let xe=performance.now(),Ie=0;const $e=B=>{if(m)return;w=requestAnimationFrame($e);", "let xe=performance.now(),Ie=0,Ve=!document.hidden,Ke=!!(window.matchMedia&&window.matchMedia(\"(prefers-reduced-motion: reduce)\").matches);const $e=B=>{if(m||!Ve){w=0;return}")
  .replace("M.render({scene:te,camera:ne})};w=requestAnimationFrame($e),O={resize:kn,mousemove:J,scroll:ke,moveTarget:d?window:g}", "M.render({scene:te,camera:ne});if(!Ke&&g.dataset.stage!==\"hidden\")w=requestAnimationFrame($e);else w=0};const startStory=()=>{if(m||!Ve||w)return;xe=performance.now(),w=requestAnimationFrame($e)};be=startStory;const qe=()=>{Ve=!document.hidden,Ve?startStory():(w&&cancelAnimationFrame(w),w=0)};document.addEventListener(\"visibilitychange\",qe),startStory(),O={resize:kn,mousemove:J,scroll:ke,moveTarget:d?window:g,visibility:qe}")
  .replace("window.removeEventListener(\"resize\",O&&O.resize),", "window.removeEventListener(\"resize\",O&&O.resize),document.removeEventListener(\"visibilitychange\",O&&O.visibility),")
  .replaceAll("Math.random()", "rand()")
  .replace("he=async()=>", "initStory=async()=>")
  .replace("}),initStory=async()=>", "});(async()=>")
  .replace("},he();return", "})();return");
const performanceStoryBase = normalizedStoryParticleRenderer
  .replace(
    "O=null,be=null;const Pe=",
    "O=null,be=null,layoutRaf=0;const Pe=",
  )
  .replace(
    "const R=await Re();if(m)return;",
    'const R=await Re();await new Promise(resolve=>{"requestIdleCallback"in window?window.requestIdleCallback(()=>resolve(),{timeout:180}):setTimeout(resolve,64)});if(m)return;',
  )
  .replace(
    'const layoutObserver=typeof ResizeObserver<"u"?new ResizeObserver(()=>{Q(),be&&be()}):null;layoutObserver&&layoutObserver.observe(document.documentElement);const ke',
    'const layoutObserver=typeof ResizeObserver<"u"?new ResizeObserver(()=>{layoutRaf||(layoutRaf=requestAnimationFrame(()=>{layoutRaf=0,Q(),be&&be()}))}):null;layoutObserver&&layoutObserver.observe(document.documentElement);const ke',
  );
const performanceStoryParticleRenderer = performanceStoryBase.includes(
  "layoutRaf&&cancelAnimationFrame(layoutRaf)",
)
  ? performanceStoryBase
  : performanceStoryBase.replace(
      "O&&O.layoutObserver&&O.layoutObserver.disconnect(),",
      "O&&O.layoutObserver&&O.layoutObserver.disconnect(),layoutRaf&&cancelAnimationFrame(layoutRaf),",
    );
// Restore the original logo-to-cloud opening, while still stopping the canvas
// once the introduction has scrolled away. Keep reduced-motion users on a fade.
const animatedOpeningParticles = performanceStoryParticleRenderer
  .replace("fadeEnd=Math.max(F*.30,le*.32)", "fadeEnd=Math.max(F*.72,le*.92)")
  .replace(
    'const B=window.scrollY,fade=Pe(wn(B,fadeEnd*.04,fadeEnd));re.uniforms.uLogoMix.value=d?1:0,re.uniforms.uSideMix.value=0,re.uniforms.uFade.value=d?fade:0;const Be=.92*(1-Pe(wn(fade,.72,1)));g.style.opacity=Be.toFixed(3),g.style.visibility=fade>.995?"hidden":"visible",g.dataset.stage=fade>.995?"hidden":"logo"',
    'const B=window.scrollY,progress=wn(B,0,fadeEnd),reduced=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,scatter=reduced?0:Pe(wn(progress,0,.75)),fade=Pe(wn(progress,.45,1));re.uniforms.uLogoMix.value=d?1-scatter:0,re.uniforms.uSideMix.value=0,re.uniforms.uFade.value=d?fade:0;const Be=.92*(1-fade);g.style.opacity=Be.toFixed(3),g.style.visibility=progress>.995?"hidden":"visible",g.dataset.stage=progress>.995?"hidden":scatter>.96?"cloud":"logo"',
  );
if (animatedOpeningParticles === performanceStoryParticleRenderer || !animatedOpeningParticles.includes('scatter=reduced?0:Pe')) {
  throw new Error("Unable to restore the historical particle opening transition");
}
bundle =
  bundle.slice(0, storyParticleStart) +
  animatedOpeningParticles +
  bundle.slice(storyParticleEnd);

const splitUnitOriginal = 'className:"rb-split-unit",style:{transitionDelay:';
const splitUnitWithHyphen = 'className:`rb-split-unit ${o==="-"?"atria-hyphen":""}`,style:{transitionDelay:';
if (bundle.includes(splitUnitOriginal)) {
  bundle = bundle.replace(splitUnitOriginal, splitUnitWithHyphen);
} else if (!bundle.includes(splitUnitWithHyphen)) {
  throw new Error("Unable to style the legacy brand separator independently");
}

const heroRendererStart = bundle.indexOf("function P0");
const heroRendererEnd = bundle.indexOf("function Zr", heroRendererStart);
const oldHeroRenderer = bundle.slice(heroRendererStart, heroRendererEnd);
if (!oldHeroRenderer.startsWith("function P0") || oldHeroRenderer.length < 500) {
  throw new Error("Unable to locate hero renderer");
}
const newHeroRenderer = 'function P0({hero:e={}}){const t=q.useRef(null);return q.useEffect(()=>{const n=t.current;if(!n)return;let r=0;const i=()=>{r||(r=requestAnimationFrame(()=>{r=0;const l=window.innerHeight,s=Math.min(Math.max(window.scrollY/(l*.8),0),1);n.style.setProperty("--p1",s.toFixed(4))}))};return i(),window.addEventListener("scroll",i,{passive:!0}),()=>{window.removeEventListener("scroll",i),r&&cancelAnimationFrame(r)}},[]),x.jsx("section",{className:"hero",id:"top",ref:t,style:{"--p1":0},children:x.jsxs("div",{className:"hero__stage",children:[x.jsx("div",{className:"hero__bg","aria-hidden":"true",children:x.jsx("div",{className:"hero__veil"})}),x.jsxs("div",{className:"wrap hero__inner",children:[x.jsx("div",{className:"hero__eyebrow",children:e.eyebrow}),x.jsxs("div",{className:"hero__title-stack",children:[x.jsx("h1",{className:"hero__title hero__title--origin",children:x.jsx(I0,{text:e.title||"",by:"char",delay:24})}),x.jsx("h1",{className:"hero__title hero__title--welcome",children:e.welcome||"Welcome to Atria ASI"})]}),x.jsx("p",{className:"hero__sub",dangerouslySetInnerHTML:{__html:e.sub||""}}),x.jsx("div",{className:"hero__meta",children:e.meta}),x.jsxs("div",{className:"actions hero__actions",children:[x.jsx("div",{className:"hero__platforms",children:(e.links||[]).map((n,r)=>{const i=n.href&&n.href!=="#";return x.jsx("a",{className:`hero__platform ${i?"":"is-placeholder"}`,href:i?n.href:"#",target:i?"_blank":void 0,rel:i?"noreferrer":void 0,"aria-disabled":i?void 0:"true",title:i?void 0:"链接待补充",onClick:i?void 0:l=>l.preventDefault(),children:n.label},r)})}),x.jsxs("a",{className:"btn btn-text",href:"#cases",children:["查看案例 ",x.jsx("span",{className:"arrow",children:"→"})]})]})]}),x.jsxs("div",{className:"hero__cue","aria-hidden":"true",children:[x.jsx("span",{children:"滚动展开"}),x.jsx("span",{className:"hero__cue-arrow",children:"↓"})]})]})})}';
const heroRendererWithReflection = newHeroRenderer.replace(
  'x.jsx("h1",{className:"hero__title hero__title--origin",children:x.jsx(I0,{text:e.title||"",by:"char",delay:24})})',
  'x.jsxs("h1",{className:"hero__title hero__title--origin",children:[x.jsx(I0,{text:e.title||"",by:"char",delay:24}),x.jsxs("span",{className:"atria-reflection","aria-hidden":"true",children:["Atria Dawn ",x.jsx("span",{className:"atria-preview",children:"Preview"})]})]})',
);
const heroRendererWithWelcomeBrand = heroRendererWithReflection.replace(
  'x.jsx("h1",{className:"hero__title hero__title--welcome",children:e.welcome||"Welcome to Atria ASI"})',
  'x.jsxs("h1",{className:"hero__title hero__title--welcome",children:[x.jsx("span",{className:"hero__welcome-prefix",children:e.welcomePrefix||"Welcome to"}),x.jsxs("span",{className:"hero__welcome-brand",children:[x.jsx("span",{className:"hero__welcome-logo","aria-hidden":"true"}),x.jsx("span",{children:e.welcomeBrand||"Atria ASI"})]})]})',
);
bundle = bundle.slice(0, heroRendererStart) + heroRendererWithWelcomeBrand + bundle.slice(heroRendererEnd);

const defaultMediaParser =
  'function Lc(e,t){const r=e.split("#")[0].split("?")[0].split(".").pop().toLowerCase(),i=Uv[r]||"html",l={type:i,src:e};return t&&(l.label=t),i==="image"&&(l.alt=t||""),l}';
const mediaParserWithWideSwe =
  'function Lc(e,t){const r=e.split("#")[0].split("?")[0].split(".").pop().toLowerCase(),i=e.includes("/cases/SWE.html")?"iframe":Uv[r]||"html",l=i==="iframe"?{type:i,src:e,designW:1920,designH:1080}:{type:i,src:e};return t&&(l.label=t),i==="image"&&(l.alt=t||""),l}';
const mediaParserWithLegacyWideDemos =
  'function Lc(e,t){const r=e.split("#")[0].split("?")[0].split(".").pop().toLowerCase(),i=["/cases/SWE.html","/cases/game.html"].some(s=>e.includes(s))?"iframe":Uv[r]||"html",l=i==="iframe"?{type:i,src:e,designW:1920,designH:1080}:{type:i,src:e};return t&&(l.label=t),i==="image"&&(l.alt=t||""),l}';
const mediaParserWithTransitionalWideDemos =
  'function Lc(e,t){const r=e.split("#")[0].split("?")[0].split(".").pop().toLowerCase(),i=["/cases/SWE.html","/cases/game.html","/cases/火灾逃生教育游戏.html"].some(s=>e.includes(s))?"iframe":Uv[r]||"html",l=i==="iframe"?{type:i,src:e,designW:1920,designH:1080}:{type:i,src:e};return t&&(l.label=t),i==="image"&&(l.alt=t||""),l}';
const mediaParserWithPreTerminalWideDemos =
  'function Lc(e,t){const r=e.split("#")[0].split("?")[0].split(".").pop().toLowerCase(),i=["/cases/SWE.html","/cases/SWE-en.html","/cases/火灾逃生教育游戏.html"].some(s=>e.includes(s))?"iframe":Uv[r]||"html",l=i==="iframe"?{type:i,src:e,designW:1920,designH:1080}:{type:i,src:e};return t&&(l.label=t),i==="image"&&(l.alt=t||""),l}';
const mediaParserWithWideDemos =
  'function Lc(e,t){const r=e.split("#")[0].split("?")[0].split(".").pop().toLowerCase(),i=["/cases/SWE.html","/cases/SWE-en.html","/cases/火灾逃生教育游戏.html","/cases/terminal_ch/index.html","/cases/terminal_en/index.html"].some(s=>e.includes(s))?"iframe":Uv[r]||"html",l=i==="iframe"?{type:i,src:e,designW:1920,designH:1080}:{type:i,src:e};return t&&(l.label=t),i==="image"&&(l.alt=t||""),l}';
const mediaParserWithScaledMiniOS =
  'function Lc(e,t){const r=e.split("#")[0].split("?")[0].split(".").pop().toLowerCase(),s=e.includes("/cases/minios-interactive/"),i=s||["/cases/SWE.html","/cases/SWE-en.html","/cases/火灾逃生教育游戏.html","/cases/terminal_ch/index.html","/cases/terminal_en/index.html"].some(o=>e.includes(o))?"iframe":Uv[r]||"html",l=i==="iframe"?{type:i,src:e,designW:s?1280:1920,designH:s?720:1080}:{type:i,src:e};return t&&(l.label=t),i==="image"&&(l.alt=t||""),l}';
const mediaParserWithStableScaledDemos =
  'function Lc(e,t){const r=e.split("#")[0].split("?")[0].split(".").pop().toLowerCase(),s=e.includes("/cases/minios-interactive/"),o=["/cases/deepresearch.html","/cases/deepresearch_en.html"].some(a=>e.includes(a)),i=s||o||["/cases/SWE.html","/cases/SWE-en.html","/cases/火灾逃生教育游戏.html","/cases/火灾-en-20260914.html","/cases/terminal_ch/index.html","/cases/terminal_en/index.html"].some(a=>e.includes(a))?"iframe":Uv[r]||"html",l=i==="iframe"?{type:i,src:e,designW:s?1280:o?1180:1920,designH:s?720:o?860:1080}:{type:i,src:e};return t&&(l.label=t),i==="image"&&(l.alt=t||""),l}';
if (bundle.includes(defaultMediaParser)) {
  bundle = bundle.replace(defaultMediaParser, mediaParserWithStableScaledDemos);
} else if (bundle.includes(mediaParserWithWideSwe)) {
  bundle = bundle.replace(mediaParserWithWideSwe, mediaParserWithStableScaledDemos);
} else if (bundle.includes(mediaParserWithLegacyWideDemos)) {
  bundle = bundle.replace(mediaParserWithLegacyWideDemos, mediaParserWithStableScaledDemos);
} else if (bundle.includes(mediaParserWithTransitionalWideDemos)) {
  bundle = bundle.replace(mediaParserWithTransitionalWideDemos, mediaParserWithStableScaledDemos);
} else if (bundle.includes(mediaParserWithPreTerminalWideDemos)) {
  bundle = bundle.replace(mediaParserWithPreTerminalWideDemos, mediaParserWithStableScaledDemos);
} else if (bundle.includes(mediaParserWithWideDemos)) {
  bundle = bundle.replace(mediaParserWithWideDemos, mediaParserWithStableScaledDemos);
} else if (bundle.includes(mediaParserWithScaledMiniOS)) {
  bundle = bundle.replace(mediaParserWithScaledMiniOS, mediaParserWithStableScaledDemos);
} else if (!bundle.includes(mediaParserWithStableScaledDemos)) {
  throw new Error("Unable to render the SWE and game demos with the wide iframe layout");
}

const pdfViewerWithToolbar =
  'src:`${e.src}#toolbar=1&view=FitH`,title:t,loading:"lazy"';
const pdfViewerWithoutDownloadControls =
  'src:`${e.src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`,title:t,loading:"lazy",onContextMenu:n';
const eagerPdfViewerWithoutDownloadControls =
  'src:`${e.src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`,title:t,loading:"eager",onContextMenu:n';
if (bundle.includes(pdfViewerWithToolbar)) {
  bundle = bundle.replace(pdfViewerWithToolbar, eagerPdfViewerWithoutDownloadControls);
} else if (bundle.includes(pdfViewerWithoutDownloadControls)) {
  bundle = bundle.replace(pdfViewerWithoutDownloadControls, eagerPdfViewerWithoutDownloadControls);
} else if (!bundle.includes(eagerPdfViewerWithoutDownloadControls) && !bundle.includes("toolbar=0&navpanes=0&scrollbar=1&view=FitH")) {
  throw new Error("Unable to disable the PDF viewer download controls");
}

const videoWithAudioControls = 'src:e.src,controls:!0,preload:"metadata",controlsList:"nodownload noplaybackrate noremoteplayback",disablePictureInPicture:!0,disableRemotePlayback:!0,onContextMenu:n';
const alwaysMutedVideo = 'src:e.src,controls:!0,muted:!0,defaultMuted:!0,preload:"metadata",controlsList:"nodownload noplaybackrate noremoteplayback",disablePictureInPicture:!0,disableRemotePlayback:!0,onVolumeChange:r=>{r.currentTarget.muted||(r.currentTarget.muted=!0)},onContextMenu:n';
if (bundle.includes(videoWithAudioControls)) {
  bundle = bundle.replace(videoWithAudioControls, alwaysMutedVideo);
} else if (
  !bundle.includes(alwaysMutedVideo) &&
  !bundle.includes("defaultMuted:!0") &&
  !bundle.includes("defaultMuted: true")
) {
  throw new Error("Unable to force demo videos to remain muted");
}

const scaledRendererStart = bundle.indexOf("function D0");
const scaledRendererEnd = bundle.indexOf("function oc", scaledRendererStart);
const oldScaledRenderer = bundle.slice(scaledRendererStart, scaledRendererEnd);
if (!oldScaledRenderer.startsWith("function D0") || oldScaledRenderer.length < 300) {
  throw new Error("Unable to locate scaled iframe renderer");
}
const newScaledRenderer = 'function D0({src:e,title:t,designW:n=1920,designH:r=1080,priority:i,onLoad:l,poster:s}){const o=q.useRef(null),[a,u]=q.useState(null);return q.useEffect(()=>{const c=o.current;if(!c)return;const h=new ResizeObserver(()=>u(c.clientWidth/n));return h.observe(c),()=>h.disconnect()},[n]),x.jsxs("div",{className:"embed",ref:o,style:{aspectRatio:`${n} / ${r}`},children:[i!==!1&&a!=null&&x.jsx("iframe",{className:"embed__frame",src:e,title:t,loading:"lazy",allow:"fullscreen",allowFullScreen:!0,onLoad:l,style:{width:n,height:r,transform:`scale(${a})`}}),i!==!1&&(s?x.jsx("div",{className:"demo-poster demo-poster--loading","aria-hidden":"true",children:x.jsx("img",{src:s,alt:"",draggable:!1})}):x.jsx("div",{className:"demo-frame-skeleton","aria-hidden":"true"}))]})}';
const optimizedScaledRenderer = 'function D0({src:e,title:t,designW:n=1920,designH:r=1080,priority:i,onLoad:l}){const s=q.useRef(null),[o,a]=q.useState(null);return q.useEffect(()=>{const u=s.current;if(!u)return;let c=0;const h=()=>{c||(c=requestAnimationFrame(()=>{c=0;const f=u.clientWidth/n;a(d=>d&&Math.abs(d-f)<.002?d:f)}))},p=new ResizeObserver(h);return p.observe(u),h(),()=>{c&&cancelAnimationFrame(c),p.disconnect()}},[n]),x.jsx("div",{className:"embed",ref:s,style:{aspectRatio:`${n} / ${r}`},children:i!==!1&&o!=null&&x.jsx("iframe",{className:"embed__frame",src:e,title:t,loading:"lazy",allow:"fullscreen",allowFullScreen:!0,onLoad:l,style:{width:n,height:r,transform:`scale(${o})`}})})}';
const eagerScaledRenderer = optimizedScaledRenderer.replace('loading:"lazy"', 'loading:"eager"');
bundle = bundle.slice(0, scaledRendererStart) + eagerScaledRenderer + bundle.slice(scaledRendererEnd);

const mediaRendererStart = bundle.indexOf("function oc");
const mediaRendererEnd = bundle.indexOf("const B0=", mediaRendererStart);
const oldMediaRenderer = bundle.slice(mediaRendererStart, mediaRendererEnd);
if (!oldMediaRenderer.startsWith("function oc") || oldMediaRenderer.length < 500) {
  throw new Error("Unable to locate media renderer");
}
const newMediaRenderer = 'function oc({media:e,title:t,active:n=!0,onRequestLoad:r}){const siteLabels=useSiteLabels();const[i,l]=q.useState(!1),s=o=>o.preventDefault(),o=["html","iframe"].includes(e==null?void 0:e.type),a=n&&e.priority!==!1&&(!o||e.interactiveReady!==!1),u=["/cases/presentation-showcase.html","/cases/productivity-showcase.html"].some(c=>(e.src||"").includes(c)),c=e.src||"",h=[["/cases/ml-coding-en.html","ml-coding-en"],["/cases/ml-coding.html","ml-coding"],["/cases/deepresearch_en.html","deepresearch-en"],["/cases/deepresearch.html","deepresearch"],["/cases/大观园.html","grand-view-garden"],["/cases/室内装修.html","interior-design"],["/cases/terminal_en/index.html","odyssey-en"],["/cases/terminal_ch/index.html","odyssey-zh"],["/cases/火灾逃生教育游戏.html","fire-escape"],["/cases/SWE-en.html","swe-en"],["/cases/SWE.html","swe"],["/cases/minios-interactive/","minios"],["/cases/presentation-showcase.html","presentation"],["/cases/productivity-showcase.html","productivity"],["atria-dawn-weather.atria-asi.ai","weather"]].find(C=>c.includes(C[0])),E=document.documentElement.lang==="en",L=h&&E&&["presentation","productivity"].includes(h[1])?`${h[1]}-en`:h?h[1]:null,f=L?`/assets/demo-posters/${L}.jpg?v=20260911-poster2`:null,b=L&&["ml-coding-en","ml-coding","deepresearch-en","deepresearch","grand-view-garden","interior-design","presentation","presentation-en","productivity","productivity-en"].includes(L)?`/assets/demo-posters/${L}-mobile.jpg?v=20260911-poster2`:null;q.useEffect(()=>{l(!1)},[e.src,a]);const d=C=>{f?window.setTimeout(()=>l(!0),700):l(!0);if(!["/cases/ml-coding.html","/cases/ml-coding-en.html","/cases/presentation-showcase.html","/cases/productivity-showcase.html"].some(E=>e.src.includes(E)))return;const L=C.currentTarget,P=L.parentElement,R=L.contentDocument,M=P&&(P.querySelector(".shell")||P.body),W=()=>{try{const I=L.contentDocument,A=I&&(I.querySelector(".shell")||I.body),H=A&&A.getBoundingClientRect().height;H&&P&&(P.style.height=`${Math.ceil(H)}px`)}catch{}};W(),L.__atriaHeightObserver&&L.__atriaHeightObserver.disconnect(),M&&(L.__atriaHeightObserver=new ResizeObserver(W),L.__atriaHeightObserver.observe(M))},p=C=>{const E=C.currentTarget.closest(".demo-fullscreen-host"),L=E&&(E.requestFullscreen||E.webkitRequestFullscreen);L&&L.call(E)},g=()=>x.jsx("button",{type:"button",className:"demo-fullscreen",onClick:p,"aria-label":siteLabels.fullscreen,title:siteLabels.fullscreen,children:x.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:x.jsx("path",{d:"M8 4H4v4M16 4h4v4M20 16v4h-4M8 20H4v-4",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})})}),m=()=>x.jsx("div",{className:"demo-suspended","aria-hidden":"true"}),A=()=>x.jsxs("picture",{children:[b&&x.jsx("source",{media:"(max-width: 720px)",srcSet:b}),x.jsx("img",{src:f,alt:"",draggable:!1})]}),y=(C=!0)=>f?C?x.jsx("button",{type:"button",className:"demo-poster",onClick:r,"aria-label":siteLabels.loadDemo,"data-demo-poster":L,children:x.jsx(A,{})}):x.jsx("div",{className:"demo-poster demo-poster--loading","aria-hidden":"true","data-demo-poster":L,children:x.jsx(A,{})}):x.jsx("div",{className:"demo-frame-skeleton","aria-hidden":"true"}),v=()=>e.interactiveReady===!1?y():x.jsxs(x.Fragment,{children:[!i&&y(!1),x.jsx("iframe",{className:`case__frame ${i?"is-loaded":""}`,src:e.src,title:t,loading:"lazy",allow:"fullscreen",allowFullScreen:!0,onLoad:d})]});if(!n||e.priority===!1)return m();return(e==null?void 0:e.type)==="video"?x.jsx("div",{className:"figure figure--media",children:x.jsx("video",{className:"case__video",src:a?e.src:void 0,controls:!0,muted:!0,defaultMuted:!0,preload:"metadata",playsInline:!0,controlsList:"nodownload noplaybackrate noremoteplayback",disablePictureInPicture:!0,disableRemotePlayback:!0,onVolumeChange:C=>{C.currentTarget.muted||(C.currentTarget.muted=!0)},onContextMenu:s})}):(e==null?void 0:e.type)==="image"?x.jsx("div",{className:"figure figure--media",children:x.jsx("img",{className:"case__image",src:a?e.src:void 0,alt:e.alt||t,loading:"lazy",decoding:"async",draggable:!1,onContextMenu:s})}):(e==null?void 0:e.type)==="html"?u?x.jsx("div",{className:`figure figure--embed ${i?"is-loaded":"is-loading"}`,style:{height:e.height||"76vh"},"data-demo-poster":L,children:v()}):x.jsxs("div",{className:`figure figure--embed demo-fullscreen-host ${i?"is-loaded":"is-loading"}`,style:{height:e.height||"76vh"},"data-demo-poster":L,children:[v(),g()]}):(e==null?void 0:e.type)==="pdf"?x.jsx("div",{className:"figure figure--embed",style:{height:e.height||"82vh"},children:x.jsx("iframe",{className:"case__frame is-loaded",src:`${e.src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`,title:t,loading:"lazy",onContextMenu:s})}):(e==null?void 0:e.type)==="component"?null:(e==null?void 0:e.type)==="iframe"?x.jsxs("div",{className:`demo-fullscreen-host demo-fullscreen-host--scaled ${i?"is-loaded":"is-loading"}`,"data-demo-poster":L,children:[e.interactiveReady===!1?x.jsx("div",{className:"embed",style:{aspectRatio:`${e.designW||1920} / ${e.designH||1080}`},children:y()}):x.jsx(D0,{src:e.src,title:t,designW:e.designW,designH:e.designH,priority:a,onLoad:()=>l(!0),poster:f}),g()]}):x.jsx("div",{className:"figure",children:x.jsxs("div",{className:"figure__media",style:{aspectRatio:"16 / 9"},children:[t,siteLabels.mediaPlaceholder]})})}';
const tunedMediaRenderer = newMediaRenderer
  .replace(
    ':null;q.useEffect(()=>{l(!1)},[e.src,a]);',
    ':null,F=L&&L.startsWith("ml-coding")?3500:700;q.useEffect(()=>{l(!1)},[e.src,a]);',
  )
  .replace(
    'f?window.setTimeout(()=>l(!0),700):l(!0);',
    'f?window.setTimeout(()=>l(!0),F):l(!0);',
  );
const optimizedMediaRenderer = 'function oc({media:e,title:t,active:n=!0}){const siteLabels=useSiteLabels();const[i,l]=q.useState(!1),s=o=>o.preventDefault(),a=n&&e.priority!==!1,u=["/cases/presentation-showcase.html","/cases/productivity-showcase.html"].some(o=>(e.src||"").includes(o)),c=e.src||"",h=[["/cases/ml-coding-en.html","ml-coding-en"],["/cases/ml-coding.html","ml-coding"],["/cases/deepresearch_en.html","deepresearch-en"],["/cases/deepresearch.html","deepresearch"],["/cases/大观园.html","grand-view-garden"],["/cases/室内装修.html","interior-design"],["/cases/terminal_en/index.html","odyssey-en"],["/cases/terminal_ch/index.html","odyssey-zh"],["/cases/火灾逃生教育游戏.html","fire-escape"],["/cases/SWE-en.html","swe-en"],["/cases/SWE.html","swe"],["/cases/minios-interactive/","minios"],["/cases/presentation-showcase.html","presentation"],["/cases/productivity-showcase.html","productivity"],["atria-dawn-weather.atria-asi.ai","weather"]].find(o=>c.includes(o[0])),E=document.documentElement.lang==="en",L=h&&E&&["presentation","productivity"].includes(h[1])?`${h[1]}-en`:h?h[1]:null;q.useEffect(()=>{l(!1)},[e.src,a]);const f=()=>l(!0),b=o=>{const E=o.currentTarget.closest(".demo-fullscreen-host"),L=E&&(E.requestFullscreen||E.webkitRequestFullscreen);L&&L.call(E)},d=()=>x.jsx("button",{type:"button",className:"demo-fullscreen",onClick:b,"aria-label":siteLabels.fullscreen,title:siteLabels.fullscreen,children:x.jsx("svg",{viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false",children:x.jsx("path",{d:"M8 4H4v4M16 4h4v4M20 16v4h-4M8 20H4v-4",fill:"none",stroke:"currentColor",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})})}),p=()=>a?x.jsx("iframe",{className:`case__frame ${i?"is-loaded":""}`,src:e.src,title:t,loading:"lazy",allow:"fullscreen",allowFullScreen:!0,onLoad:f}):null;if((e==null?void 0:e.type)==="video")return x.jsx("div",{className:"figure figure--media demo-reserved-media",children:x.jsx("video",{className:"case__video",src:a?e.src:void 0,controls:!0,muted:!0,defaultMuted:!0,preload:a?"metadata":"none",playsInline:!0,controlsList:"nodownload noplaybackrate noremoteplayback",disablePictureInPicture:!0,disableRemotePlayback:!0,onVolumeChange:o=>{o.currentTarget.muted||(o.currentTarget.muted=!0)},onContextMenu:s})});if((e==null?void 0:e.type)==="image")return x.jsx("div",{className:"figure figure--media",children:x.jsx("img",{className:"case__image",src:e.src,alt:e.alt||t,loading:"lazy",decoding:"async",draggable:!1,onContextMenu:s})});if((e==null?void 0:e.type)==="html")return u?x.jsx("div",{className:`figure figure--embed ${i?"is-loaded":"is-loading"}`,style:{height:e.height||"76vh"},"data-demo-kind":L,children:p()}):x.jsxs("div",{className:`figure figure--embed demo-fullscreen-host ${i?"is-loaded":"is-loading"}`,style:{height:e.height||"76vh"},"data-demo-kind":L,children:[p(),d()]});if((e==null?void 0:e.type)==="pdf")return x.jsx("div",{className:"figure figure--embed",style:{height:e.height||"82vh"},children:a&&x.jsx("iframe",{className:"case__frame is-loaded",src:`${e.src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`,title:t,loading:"lazy",onContextMenu:s})});if((e==null?void 0:e.type)==="component")return null;if((e==null?void 0:e.type)==="iframe")return x.jsxs("div",{className:`demo-fullscreen-host demo-fullscreen-host--scaled ${i?"is-loaded":"is-loading"}`,"data-demo-kind":L,children:[x.jsx(D0,{src:e.src,title:t,designW:e.designW,designH:e.designH,priority:a,onLoad:f}),d()]});return x.jsx("div",{className:"figure",children:x.jsxs("div",{className:"figure__media",style:{aspectRatio:"16 / 9"},children:[t,siteLabels.mediaPlaceholder]})})}';
const unifiedMediaRenderer = function oc({ media: e, title: t, active: n = true }) {
  const siteLabels = useSiteLabels();
  const [i, l] = q.useState(false);
  const [pseudoFullscreen, setPseudoFullscreen] = q.useState(false);
  const [nativeFullscreen, setNativeFullscreen] = q.useState(false);
  const hostRef = q.useRef(null);
  const preventContextMenu = event => event.preventDefault();
  const videoPlayback =
    typeof window !== "undefined"
      ? window.__atriaVideoPlayback || (window.__atriaVideoPlayback = new Map())
      : new Map();
  const active = n && e.priority !== false;
  const isShowcase = ["/cases/presentation-showcase.html", "/cases/productivity-showcase.html"].some(src =>
    (e.src || "").includes(src),
  );
  const source = e.src || "";
  const suppressOuterFullscreen =
    isShowcase ||
    (e == null ? void 0 : e.type) === "pdf" ||
    source.includes("/cases/result");
  const demoMatch = [
    ["/cases/ml-coding-en.html", "ml-coding-en"],
    ["/cases/ml-coding.html", "ml-coding"],
    ["/cases/deepresearch_en.html", "deepresearch-en"],
    ["/cases/deepresearch.html", "deepresearch"],
    ["/cases/大观园.html", "grand-view-garden"],
    ["/cases/Interior-20260914.html", "interior-design"],
    ["/cases/室内装修.html", "interior-design"],
    ["/cases/terminal_en/index.html", "odyssey-en"],
    ["/cases/terminal_ch/index.html", "odyssey-zh"],
    ["/cases/火灾-en-20260914.html", "fire-escape"],
    ["/cases/火灾逃生教育游戏.html", "fire-escape"],
    ["/cases/SWE-en.html", "swe-en"],
    ["/cases/SWE.html", "swe"],
    ["/cases/minios-interactive/", "minios"],
    ["/cases/presentation-showcase.html", "presentation"],
    ["/cases/productivity-showcase.html", "productivity"],
    ["atria-dawn-weather.atria-asi.ai", "weather"],
  ].find(entry => source.includes(entry[0]));
  const isEnglish = document.documentElement.lang === "en";
  const demoKind = demoMatch && isEnglish && ["presentation", "productivity"].includes(demoMatch[1])
    ? `${demoMatch[1]}-en`
    : demoMatch
      ? demoMatch[1]
      : null;

  q.useEffect(() => {
    l(false);
  }, [e.src, active]);

  q.useEffect(() => {
    const syncFullscreenState = () => {
      const host = hostRef.current;
      const current = document.fullscreenElement || document.webkitFullscreenElement;
      setNativeFullscreen(Boolean(host && current && (current === host || host.contains(current))));
    };
    document.addEventListener("fullscreenchange", syncFullscreenState);
    document.addEventListener("webkitfullscreenchange", syncFullscreenState);
    return () => {
      document.removeEventListener("fullscreenchange", syncFullscreenState);
      document.removeEventListener("webkitfullscreenchange", syncFullscreenState);
    };
  }, []);

  q.useEffect(() => {
    if (!pseudoFullscreen) return undefined;
    document.body.classList.add("demo-pseudo-fullscreen-open");
    const exitOnEscape = event => {
      if (event.key === "Escape") setPseudoFullscreen(false);
    };
    document.addEventListener("keydown", exitOnEscape);
    return () => {
      document.body.classList.remove("demo-pseudo-fullscreen-open");
      document.removeEventListener("keydown", exitOnEscape);
    };
  }, [pseudoFullscreen]);

  q.useEffect(
    () => () => {
      document.body.classList.remove("demo-pseudo-fullscreen-open");
    },
    [],
  );

  const showcaseObserver = q.useRef(null);
  q.useEffect(() => () => showcaseObserver.current?.disconnect(), [e.src, active]);
  const markLoaded = event => {
    l(true);
    if (!isShowcase || !event?.currentTarget) return;
    const frame = event.currentTarget;
    try {
      const shell = frame.contentDocument?.querySelector(".shell");
      const host = frame.parentElement;
      if (!shell || !host) return;
      const resize = () => { host.style.height = `${Math.ceil(shell.getBoundingClientRect().height) + 2}px`; };
      showcaseObserver.current?.disconnect();
      showcaseObserver.current = new ResizeObserver(resize);
      showcaseObserver.current.observe(shell);
      resize();
    } catch {}
  };
  const rememberVideoPosition = event => {
    const video = event.currentTarget;
    if (source && Number.isFinite(video.currentTime)) videoPlayback.set(source, video.currentTime);
  };
  const restoreVideoPosition = event => {
    const video = event.currentTarget;
    const savedTime = videoPlayback.get(source);
    if (Number.isFinite(savedTime) && savedTime > 0 && savedTime < video.duration - 0.25) {
      video.currentTime = savedTime;
    }
  };
  const isFullscreen = nativeFullscreen || pseudoFullscreen;
  const toggleFullscreen = async event => {
    event.preventDefault();
    event.stopPropagation();
    const host = hostRef.current || event.currentTarget.closest(".demo-fullscreen-host");
    if (!host) return;
    const current = document.fullscreenElement || document.webkitFullscreenElement;
    if (current) {
      const exit = document.exitFullscreen || document.webkitExitFullscreen;
      if (exit) {
        try {
          await exit.call(document);
        } catch {}
      }
      return;
    }
    if (pseudoFullscreen) {
      setPseudoFullscreen(false);
      return;
    }

    const request = host.requestFullscreen || host.webkitRequestFullscreen;
    if (request) {
      try {
        await request.call(host);
        return;
      } catch {}
    }

    const video = host.querySelector("video");
    const enterVideoFullscreen = video && (video.webkitEnterFullscreen || video.webkitEnterFullScreen);
    if (enterVideoFullscreen) {
      try {
        enterVideoFullscreen.call(video);
        return;
      } catch {}
    }
    setPseudoFullscreen(true);
  };

  const fullscreenButton = () => {
    const label = isFullscreen ? siteLabels.exitFullscreen : siteLabels.fullscreen;
    return x.jsx("button", {
      type: "button",
      className: "demo-fullscreen",
      onClick: toggleFullscreen,
      "aria-label": label,
      "aria-pressed": isFullscreen,
      title: label,
      children: x.jsx("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        focusable: "false",
        children: x.jsx("path", {
          d: isFullscreen
            ? "M9 4v5H4M15 4v5h5M20 15h-5v5M4 15h5v5"
            : "M8 4H4v4M16 4h4v4M20 16v4h-4M8 20H4v-4",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 1.8,
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }),
      }),
    });
  };

  const wrapFullscreen = (content, className, style) =>
    x.jsxs("div", {
      ref: hostRef,
      className: `${className} demo-fullscreen-host${isShowcase ? " demo-fullscreen-host--showcase" : ""}${
        pseudoFullscreen ? " is-pseudo-fullscreen" : ""
      }`,
      style,
      "data-demo-kind": demoKind,
      children: suppressOuterFullscreen ? content : [content, fullscreenButton()],
    });

  const iframe = () =>
    active
      ? x.jsx("iframe", {
          className: `case__frame ${i ? "is-loaded" : ""}`,
          src: e.src,
          title: t,
          loading: "eager",
          allow: "fullscreen",
          allowFullScreen: true,
          onLoad: markLoaded,
        })
      : null;

  if ((e == null ? void 0 : e.type) === "video") {
    return wrapFullscreen(x.jsx("video", {
        className: "case__video",
        src: active ? e.src : void 0,
        poster: e.poster || (source.startsWith("/cases/community/") ? source.replace(/\/preview\.mp4(?:\?.*)?$/, source.includes("/hk-sightseeing/") ? "/poster.jpg" : "/poster.webp") : void 0),
        controls: true,
        muted: true,
        defaultMuted: true,
        preload: active ? "metadata" : "none",
        playsInline: true,
        controlsList: "nodownload noplaybackrate noremoteplayback",
        disablePictureInPicture: true,
        disableRemotePlayback: true,
        onLoadedMetadata: restoreVideoPosition,
        onTimeUpdate: rememberVideoPosition,
        onPause: rememberVideoPosition,
        onSeeked: rememberVideoPosition,
        onEnded: () => videoPlayback.delete(source),
        onContextMenu: preventContextMenu,
      }), "figure figure--media demo-reserved-media");
  }
  if ((e == null ? void 0 : e.type) === "image") {
    return wrapFullscreen(
      x.jsx("img", {
        className: "case__image",
        src: e.src,
        alt: e.alt || t,
        loading: "lazy",
        decoding: "async",
        draggable: false,
        onContextMenu: preventContextMenu,
      }),
      "figure figure--media",
    );
  }
  if ((e == null ? void 0 : e.type) === "html") {
    return wrapFullscreen(
      iframe(),
      `figure figure--embed ${i ? "is-loaded" : "is-loading"}`,
      { height: e.height || "76vh" },
    );
  }
  if ((e == null ? void 0 : e.type) === "pdf") {
    return wrapFullscreen(
      active
        ? x.jsx("iframe", {
            className: "case__frame is-loaded",
            src: `${e.src}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`,
            title: t,
            loading: "eager",
            allow: "fullscreen",
            allowFullScreen: true,
            onContextMenu: preventContextMenu,
          })
        : null,
      "figure figure--embed",
      { height: e.height || "82vh" },
    );
  }
  if ((e == null ? void 0 : e.type) === "component") return null;
  if ((e == null ? void 0 : e.type) === "iframe") {
    return wrapFullscreen(
      x.jsx(D0, {
        src: e.src,
        title: t,
        designW: e.designW,
        designH: e.designH,
        priority: active,
        onLoad: markLoaded,
      }),
      `demo-fullscreen-host--scaled ${i ? "is-loaded" : "is-loading"}`,
    );
  }
  return x.jsx("div", {
    className: "figure",
    children: x.jsxs("div", {
      className: "figure__media",
      style: { aspectRatio: "16 / 9" },
      children: [t, siteLabels.mediaPlaceholder],
    }),
  });
}.toString();
const relocatedShowcaseRenderer = unifiedMediaRenderer
  .replaceAll("/cases/presentation-showcase.html", "presentation-showcase.html")
  .replaceAll("/cases/productivity-showcase.html", "productivity-showcase.html");
const eagerMediaRenderer = relocatedShowcaseRenderer
  .replace('title:t,loading:"lazy",allow:"fullscreen"', 'title:t,loading:"eager",allow:"fullscreen"')
  .replace('title:t,loading:"lazy",onContextMenu:s', 'title:t,loading:"eager",onContextMenu:s');
bundle = bundle.slice(0, mediaRendererStart) + eagerMediaRenderer + bundle.slice(mediaRendererEnd);

const parserOriginal =
  'return k(),{brand:n.brand||"ATRIA-Dawn",weatherUrl:i,hero:n.hero||{},overview:qv(n.overview),casesHeader:n.cases||{},availability:n.availability||{},references:n.references||[],themes:s}';
const parserLegacyBranded =
  'return k(),{brand:n.brand||"Atria-Dawn Preview",weatherUrl:i,hero:n.hero||{},overview:qv(n.overview),casesHeader:n.cases||{},availability:n.availability||{},references:n.references||[],themes:s}';
const parserBrandedWithoutBenchmarkNotes =
  'return k(),{brand:n.brand||"Atria Dawn Preview",weatherUrl:i,hero:n.hero||{},overview:qv(n.overview),casesHeader:n.cases||{},availability:n.availability||{},references:n.references||[],benchmarkTable:n.benchmarkTable||{},themes:s}';
const parserBranded =
  'return k(),{brand:n.brand||"Atria Dawn Preview",weatherUrl:i,hero:n.hero||{},overview:qv(n.overview),casesHeader:n.cases||{},availability:n.availability||{},references:n.references||[],benchmarkTable:n.benchmarkTable||{},benchmarkNotes:n.benchmarkNotes||{},themes:s}';
const parserWithKernelTrace =
  'return k(),{brand:n.brand||"ATRIA-Dawn",weatherUrl:i,hero:n.hero||{},overview:qv(n.overview),casesHeader:n.cases||{},availability:n.availability||{},references:n.references||[],kernelTrace:n.kernelTrace||{},themes:s}';
const parserWithKernelTraceBranded =
  'return k(),{brand:n.brand||"Atria-Dawn Preview",weatherUrl:i,hero:n.hero||{},overview:qv(n.overview),casesHeader:n.cases||{},availability:n.availability||{},references:n.references||[],kernelTrace:n.kernelTrace||{},themes:s}';
if (bundle.includes(parserOriginal)) {
  bundle = bundle.replace(parserOriginal, parserBranded);
} else if (bundle.includes(parserLegacyBranded)) {
  bundle = bundle.replace(parserLegacyBranded, parserBranded);
} else if (bundle.includes(parserBrandedWithoutBenchmarkNotes)) {
  bundle = bundle.replace(parserBrandedWithoutBenchmarkNotes, parserBranded);
} else if (bundle.includes(parserBranded)) {
  // Already branded and decoupled: the standalone case reads its own data.
} else if (bundle.includes(parserWithKernelTrace)) {
  bundle = bundle.replace(parserWithKernelTrace, parserBranded);
} else if (bundle.includes(parserWithKernelTraceBranded)) {
  bundle = bundle.replace(parserWithKernelTraceBranded, parserBranded);
} else {
  throw new Error("Unable to remove kernelTrace metadata from the Markdown parser");
}

const legacyComponentFactory =
  'if(e==="@sqlchart"){const r={type:"component",name:"sqlchart"};return t&&(r.label=t),r}';
const kernelTraceComponentFactory =
  'if(e==="@sqlchart"||e==="@kerneltrace"){const r={type:"component",name:"kerneltrace"};return t&&(r.label=t),r}';
if (bundle.includes(legacyComponentFactory)) {
  // Already decoupled.
} else if (bundle.includes(kernelTraceComponentFactory)) {
  bundle = bundle.replace(kernelTraceComponentFactory, legacyComponentFactory);
} else {
  throw new Error("Unable to remove @kerneltrace from the media parser");
}

const currentChartStart = bundle.indexOf("const ktTraceComponentStart");
if (currentChartStart >= 0) {
  const chartEnd = bundle.indexOf("function D0", currentChartStart);
  if (chartEnd < 0 || chartEnd - currentChartStart < 1000) {
    throw new Error("Unable to locate the end of the kernel trace component block");
  }
  bundle = bundle.slice(0, currentChartStart) + bundle.slice(chartEnd);
}

const inlineComponentRenderer = '(e==null?void 0:e.type)==="component"?(e.name==="sqlchart"||e.name==="kerneltrace")?x.jsx(j0,{}):null:(e==null?void 0:e.type)==="iframe"?';
const legacyInlineRenderer = '(e==null?void 0:e.type)==="component"?e.name==="sqlchart"?x.jsx(j0,{}):null:(e==null?void 0:e.type)==="iframe"?';
const standaloneComponentRenderer = '(e==null?void 0:e.type)==="component"?null:(e==null?void 0:e.type)==="iframe"?';
const optimizedStandaloneComponentRenderer = 'if((e==null?void 0:e.type)==="component")return null;if((e==null?void 0:e.type)==="iframe")return';
const readableStandaloneComponentRenderer = 'if ((e == null ? void 0 : e.type) === "component") return null;';
if (bundle.includes(inlineComponentRenderer)) {
  bundle = bundle.replace(inlineComponentRenderer, standaloneComponentRenderer);
} else if (bundle.includes(legacyInlineRenderer)) {
  bundle = bundle.replace(legacyInlineRenderer, standaloneComponentRenderer);
} else if (
  !bundle.includes(standaloneComponentRenderer) &&
  !bundle.includes(optimizedStandaloneComponentRenderer) &&
  !bundle.includes(readableStandaloneComponentRenderer)
) {
  throw new Error("Unable to disconnect the inline component renderer");
}

const parserStateOriginal =
  's=[];let o=null,a=null,u=[],c=[],h=[],f=[],d=!1;const p=';
const parserStateWithThemeMedia =
  's=[];let o=null,a=null,u=[],c=[],h=[],f=[],d=!1,E=null,N=!1;const p=';
if (bundle.includes(parserStateOriginal)) {
  bundle = bundle.replace(parserStateOriginal, parserStateWithThemeMedia);
} else if (!bundle.includes(parserStateWithThemeMedia)) {
  throw new Error("Unable to extend parser state for theme-level media");
}

const themeFinalizerOriginal =
  'k=()=>{o&&(v(),o.intro=u.filter(Boolean).map(g=>Or(g)).join("<br/>"),s.push(o),o=null,u=[])};';
const themeFinalizerWithMedia =
  'k=()=>{o&&(v(),o.intro=u.filter(Boolean).map(g=>Or(g)).join("<br/>"),E&&(o.media=E),N&&(o.benchmarkPlaceholder=!0),s.push(o),o=null,u=[],E=null,N=!1)};';
if (bundle.includes(themeFinalizerOriginal)) {
  bundle = bundle.replace(themeFinalizerOriginal, themeFinalizerWithMedia);
} else if (!bundle.includes(themeFinalizerWithMedia)) {
  throw new Error("Unable to persist theme-level media");
}

const rowParserOriginal = 'if(!o)continue;if(y==="@row"){';
const rowParserWithBenchmark = 'if(!o)continue;if(y==="@benchmark"&&!a){N=!0;continue}if(y==="@row"){';
const rowParserWithCaseCaptions = 'if(!o)continue;if(y.startsWith("@caption ")&&a){a.hint=y.slice(9).trim();continue}if(y==="@benchmark"&&!a){N=!0;continue}if(y==="@row"){';
const rowParserWithCaptions = 'if(!o)continue;if(y.startsWith("@caption ")){const I=y.slice(9).trim();if(a)a.hint=I;else if(E)E.hint=I;continue}if(y==="@benchmark"&&!a){N=!0;continue}if(y==="@row"){';
const rowParserWithMediaCaptions = 'if(!o)continue;if(y.startsWith("@media-caption ")&&a&&f.length){f[f.length-1].hint=y.slice(15).trim();continue}if(y.startsWith("@caption ")){const I=y.slice(9).trim();if(a)a.hint=I;else if(E)E.hint=I;continue}if(y==="@benchmark"&&!a){N=!0;continue}if(y==="@row"){';
if (bundle.includes(rowParserOriginal)) {
  bundle = bundle.replace(rowParserOriginal, rowParserWithMediaCaptions);
} else if (bundle.includes(rowParserWithBenchmark)) {
  bundle = bundle.replace(rowParserWithBenchmark, rowParserWithMediaCaptions);
} else if (bundle.includes(rowParserWithCaseCaptions)) {
  bundle = bundle.replace(rowParserWithCaseCaptions, rowParserWithMediaCaptions);
} else if (bundle.includes(rowParserWithCaptions)) {
  bundle = bundle.replace(rowParserWithCaptions, rowParserWithMediaCaptions);
} else if (!bundle.includes(rowParserWithMediaCaptions)) {
  throw new Error("Unable to register Benchmark and Demo captions");
}

const directMediaOriginal =
  'if((T||A)&&a){const I=T||A;h.push(Lc(I[2].trim(),I[1].trim()));continue}';
const directMediaAtAnyLevel =
  'if(T||A){const I=T||A,L=Lc(I[2].trim(),I[1].trim());a?h.push(L):E=L;continue}';
if (bundle.includes(directMediaOriginal)) {
  bundle = bundle.replace(directMediaOriginal, directMediaAtAnyLevel);
} else if (!bundle.includes(directMediaAtAnyLevel)) {
  throw new Error("Unable to support media directly below a theme");
}

const caseRendererStart = bundle.indexOf("function b0");
const caseRendererEnd = bundle.indexOf("function U0", caseRendererStart);
const oldCaseRenderer = bundle.slice(caseRendererStart, caseRendererEnd);
if (!oldCaseRenderer.startsWith("function b0") || oldCaseRenderer.length < 500) {
  throw new Error("Unable to locate case renderer");
}
const newCaseRenderer = 'function b0({c:e}){var c;const[t,n]=Zr(),[r,i]=q.useState(0),[l,s]=q.useState(!1),[o,a]=q.useState(()=>new Set);q.useEffect(()=>{const h=t.current;if(!h)return;const f=new IntersectionObserver(([d])=>{const p=d.isIntersecting;s(p),p||h.querySelectorAll("video").forEach(g=>g.pause())},{rootMargin:"560px 0px",threshold:0});return f.observe(h),()=>f.disconnect()},[]);const u=e.medias||null,h=e.stack||null,f=u?u[r]:e.media,d=(f==null?void 0:f.type)||(h?(c=h[0])==null?void 0:c.type:void 0),p=B0.has(d)?"case__figure--video":"",g=m=>["html","iframe"].includes(m==null?void 0:m.type),v=m=>a(y=>{const k=new Set(y);return k.add(m),k}),w=(m,y)=>({...m,priority:l,interactiveReady:!g(m)||o.has(y)}),S=m=>{const y=m.currentTarget.closest("figure");y&&y.querySelectorAll("video").forEach(k=>k.pause())},_=u?u[r]:f,T=(u&&_&&_.hint)||e.hint;return x.jsxs("div",{className:`case reveal ${n?"is-visible":""} ${l?"is-near":""}`,ref:t,children:[x.jsxs("div",{className:"read case__lead",children:[x.jsxs("h3",{className:"h case__title",children:[e.title,e.subtitle&&x.jsx("span",{className:"case__subtitle",children:e.subtitle})]}),x.jsx("p",{className:"p",style:{marginTop:12},dangerouslySetInnerHTML:{__html:e.text}})]}),x.jsxs("figure",{className:`case__figure ${p}`,children:[u&&u.length>1&&x.jsx("div",{className:"switch",role:"tablist",children:u.map((m,y)=>x.jsx("button",{role:"tab","aria-selected":r===y,className:`switch__tab ${r===y?"is-active":""}`,onClick:k=>{S(k),i(y),g(m)&&v(y)},children:m.label||`${siteLabels.view} ${y+1}`},y))}),u?x.jsx("div",{className:"case__panels",children:x.jsx("div",{className:"case__panel is-active",children:x.jsx(oc,{media:w(u[r],r),title:e.title,active:l,onRequestLoad:()=>v(r)})},u[r].src||r)}):h?x.jsx("div",{className:e.row?"case__row":void 0,children:h.map((m,y)=>x.jsx(oc,{media:w(m,y),title:e.title,active:l,onRequestLoad:()=>v(y)},y))}):x.jsx(oc,{media:w(f,0),title:e.title,active:l,onRequestLoad:()=>v(0)}),T&&x.jsx("figcaption",{className:"figure__cap",children:T})]})]})}';
const optimizedCaseRenderer = 'function b0({c:e}){var c;const siteLabels=useSiteLabels();const[t,n]=Zr(),[r,i]=q.useState(0),[l,s]=q.useState(!1);q.useEffect(()=>{const h=t.current;if(!h)return;const f=new IntersectionObserver(([d])=>{const p=d.isIntersecting;p?q.startTransition(()=>s(!0)):s(!1),p||h.querySelectorAll("video").forEach(g=>g.pause())},{rootMargin:"1000px 0px",threshold:0});return f.observe(h),()=>f.disconnect()},[]);const o=e.medias||null,a=e.stack||null,u=o?o[r]:e.media,h=(u==null?void 0:u.type)||(a?(c=a[0])==null?void 0:c.type:void 0),f=B0.has(h)?"case__figure--video":"",d=m=>({...m,priority:l}),p=m=>{const y=m.currentTarget.closest("figure");y&&y.querySelectorAll("video").forEach(k=>k.pause())},g=o?o[r]:u,v=(o&&g&&g.hint)||e.hint;return x.jsxs("div",{className:`case reveal ${n?"is-visible":""} ${l?"is-near":""}`,ref:t,children:[x.jsxs("div",{className:"read case__lead",children:[x.jsxs("h3",{className:"h case__title",children:[e.title,e.subtitle&&x.jsx("span",{className:"case__subtitle",children:e.subtitle})]}),x.jsx("p",{className:"p",style:{marginTop:12},dangerouslySetInnerHTML:{__html:e.text}})]}),x.jsxs("figure",{className:`case__figure ${f}`,children:[o&&o.length>1&&x.jsx("div",{className:"switch",role:"tablist",children:o.map((m,y)=>x.jsx("button",{role:"tab","aria-selected":r===y,className:`switch__tab ${r===y?"is-active":""}`,onClick:k=>{p(k),i(y)},children:m.label||`${siteLabels.view} ${y+1}`},y))}),o?x.jsx("div",{className:"case__panels",children:x.jsx("div",{className:"case__panel is-active",children:x.jsx(oc,{media:d(o[r]),title:e.title,active:l})},o[r].src||r)}):a?x.jsx("div",{className:e.row?"case__row":void 0,children:a.map((m,y)=>x.jsx(oc,{media:d(m),title:e.title,active:l},y))}):x.jsx(oc,{media:d(u),title:e.title,active:l}),v&&x.jsx("figcaption",{className:"figure__cap",children:v})]})]})}';
const localizedOptimizedCaseRenderer = optimizedCaseRenderer.replace(
  "function b0({c:e}){var c;const siteLabels=useSiteLabels();",
  "function b0({c:e}){const siteLabels=useSiteLabels();var c;",
);
const settledCaseRenderer = localizedOptimizedCaseRenderer.replace(
  'q.useEffect(()=>{const h=t.current;if(!h)return;const f=new IntersectionObserver(([d])=>{const p=d.isIntersecting;p?q.startTransition(()=>s(!0)):s(!1),p||h.querySelectorAll("video").forEach(g=>g.pause())},{rootMargin:"1000px 0px",threshold:0});return f.observe(h),()=>f.disconnect()},[]);',
  'q.useEffect(()=>{const h=t.current;if(!h)return;let f=0,d=!1;const p=()=>{clearTimeout(f),d&&(f=setTimeout(()=>q.startTransition(()=>s(!0)),520))},g=new IntersectionObserver(([v])=>{d=v.isIntersecting,d?p():(clearTimeout(f),s(!1),h.querySelectorAll("video").forEach(w=>w.pause()))},{rootMargin:"350px 0px",threshold:0});return g.observe(h),window.addEventListener("scroll",p,{passive:!0}),()=>{clearTimeout(f),g.disconnect(),window.removeEventListener("scroll",p)}},[]);',
);
if (settledCaseRenderer === localizedOptimizedCaseRenderer) {
  throw new Error("Unable to install settled iframe mounting");
}
const preservedVideoCaseRenderer = function b0({ c: e }) {
  const siteLabels = useSiteLabels();
  const [caseRef, isVisible] = Zr();
  const [selectedIndex, setSelectedIndex] = q.useState(0);
  const [isNear, setIsNear] = q.useState(false);
  const [visitedVideoTabs, setVisitedVideoTabs] = q.useState(() => new Set([0]));

  q.useEffect(() => {
    const element = caseRef.current;
    if (!element) return undefined;
    let timer = 0;
    let intersects = false;
    const settle = () => {
      clearTimeout(timer);
      if (intersects) timer = setTimeout(() => q.startTransition(() => setIsNear(true)), 520);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        intersects = entry.isIntersecting;
        if (intersects) settle();
        else {
          clearTimeout(timer);
          setIsNear(false);
          element.querySelectorAll("video").forEach(video => video.pause());
        }
      },
      { rootMargin: "350px 0px", threshold: 0 },
    );
    observer.observe(element);
    window.addEventListener("scroll", settle, { passive: true });
    return () => {
      clearTimeout(timer);
      observer.disconnect();
      window.removeEventListener("scroll", settle);
    };
  }, []);

  const medias = e.medias || null;
  const stack = e.stack || null;
  const currentMedia = medias ? medias[selectedIndex] : e.media;
  const mediaType = currentMedia?.type || stack?.[0]?.type;
  const figureClass = B0.has(mediaType) ? "case__figure--video" : "";
  const withPriority = media => ({ ...media, priority: isNear });
  const isVideoTabs = Boolean(medias?.length && medias.every(media => media?.type === "video"));
  const pauseVideos = event => {
    const figure = event.currentTarget.closest("figure");
    figure?.querySelectorAll("video").forEach(video => video.pause());
  };
  const selectTab = (event, index) => {
    pauseVideos(event);
    if (isVideoTabs) {
      setVisitedVideoTabs(previous => {
        if (previous.has(index)) return previous;
        const next = new Set(previous);
        next.add(index);
        return next;
      });
    }
    setSelectedIndex(index);
  };
  const activeMedia = medias ? medias[selectedIndex] : currentMedia;
  const caption = (medias && activeMedia && activeMedia.hint) || e.hint;

  return x.jsxs("div", {
    className: `case reveal ${isVisible ? "is-visible" : ""} ${isNear ? "is-near" : ""}`,
    ref: caseRef,
    children: [
      x.jsxs("div", {
        className: "read case__lead",
        children: [
          x.jsxs("h3", {
            className: "h case__title",
            children: [e.title, e.subtitle && x.jsx("span", { className: "case__subtitle", children: e.subtitle })],
          }),
          x.jsx("p", {
            className: "p",
            style: { marginTop: 12 },
            dangerouslySetInnerHTML: { __html: e.text },
          }),
        ],
      }),
      x.jsxs("figure", {
        className: `case__figure ${figureClass}`,
        children: [
          medias &&
            medias.length > 1 &&
            x.jsx("div", {
              className: "switch",
              role: "tablist",
              children: medias.map((media, index) =>
                x.jsx(
                  "button",
                  {
                    type: "button",
                    role: "tab",
                    "aria-selected": selectedIndex === index,
                    className: `switch__tab ${selectedIndex === index ? "is-active" : ""}`,
                    onClick: event => selectTab(event, index),
                    children: media.label || `${siteLabels.view} ${index + 1}`,
                  },
                  index,
                ),
              ),
            }),
          medias
            ? x.jsx("div", {
                className: "case__panels",
                children: isVideoTabs
                  ? medias.map((media, index) =>
                      visitedVideoTabs.has(index)
                        ? x.jsx(
                            "div",
                            {
                              className: `case__panel ${selectedIndex === index ? "is-active" : ""}`,
                              children: x.jsx(oc, {
                                media: withPriority(media),
                                title: e.title,
                                active: isNear,
                              }),
                            },
                            media.src || index,
                          )
                        : null,
                    )
                  : x.jsx(
                      "div",
                      {
                        className: "case__panel is-active",
                        children: x.jsx(oc, {
                          media: withPriority(medias[selectedIndex]),
                          title: e.title,
                          active: isNear,
                        }),
                      },
                      medias[selectedIndex].src || selectedIndex,
                    ),
              })
            : stack
              ? x.jsx("div", {
                  className: e.row ? "case__row" : void 0,
                  children: stack.map((media, index) =>
                    x.jsx(oc, { media: withPriority(media), title: e.title, active: isNear }, index),
                  ),
                })
              : x.jsx(oc, { media: withPriority(currentMedia), title: e.title, active: isNear }),
          caption && x.jsx("figcaption", { className: "figure__cap", children: caption }),
        ],
      }),
    ],
  });
}.toString();
bundle = bundle.slice(0, caseRendererStart) + preservedVideoCaseRenderer + bundle.slice(caseRendererEnd);

const previousBenchmarkRendererStart = bundle.indexOf("function BenchmarkResults");
if (previousBenchmarkRendererStart >= 0) {
  const previousCasesStart = bundle.indexOf("function U0", previousBenchmarkRendererStart);
  if (previousCasesStart < 0) throw new Error("Unable to locate cases after Benchmark renderer");
  bundle = bundle.slice(0, previousBenchmarkRendererStart) + bundle.slice(previousCasesStart);
}
const casesStart = bundle.indexOf("function U0");
const legacyExtrasStart = bundle.indexOf("function V0", casesStart);
const casesEnd = legacyExtrasStart >= 0 ? legacyExtrasStart : bundle.indexOf("/*! js-yaml", casesStart);
const oldCases = bundle.slice(casesStart, casesEnd);
if (!oldCases.startsWith("function U0") || oldCases.length < 500) {
  throw new Error("Unable to locate cases renderer");
}
const newCases = 'function U0({themes:e=[]}){return x.jsx("section",{id:"cases",children:e.map((i,l)=>x.jsxs("div",{className:"theme",id:`theme-${l}`,"data-toc":i.num?`${i.num} ${i.en}`:i.name,children:[x.jsxs("div",{className:"read",children:[(i.num||i.en)&&x.jsxs("div",{className:"theme__label",children:[i.num&&x.jsx("span",{className:"theme__num",children:i.num}),i.en&&x.jsx("span",{className:"theme__en",children:i.en})]}),x.jsx("h2",{className:"h theme__name",dangerouslySetInnerHTML:{__html:i.name}}),x.jsx("p",{className:"p theme__intro",dangerouslySetInnerHTML:{__html:i.intro}})]}),i.benchmarkPlaceholder&&x.jsx("div",{className:"benchmark-placeholder","aria-label":"Benchmark 评测图预留区域"}),i.media&&x.jsx("figure",{className:"case__figure case__figure--video theme__figure",children:x.jsx(oc,{media:i.media,title:i.name})}),i.cases.map((s,o)=>x.jsx(b0,{c:s},o))]},l))})}';
const casesWithThemeCaption = newCases.replace('i.media&&x.jsx("figure",{className:"case__figure case__figure--video theme__figure",children:x.jsx(oc,{media:i.media,title:i.name})})', 'i.media&&x.jsxs("figure",{className:"case__figure case__figure--video theme__figure",children:[x.jsx(oc,{media:i.media,title:i.name}),i.media.hint&&x.jsx("figcaption",{className:"figure__cap",children:i.media.hint})]})');
const casesWithOutro = casesWithThemeCaption.replace(
  'i.cases.map((s,o)=>x.jsx(b0,{c:s},o))',
  'i.cases.map((s,o)=>x.jsx(b0,{c:s},o)),i.outro&&x.jsx("div",{className:"read theme__outro",children:x.jsx("p",{className:"p",dangerouslySetInnerHTML:{__html:i.outro}})})',
);
const benchmarkResultsRenderer = function BenchmarkResults({ table: e = {}, notes: t = {} }) {
  const columns = e.columns || [];
  const rows = e.rows || [];
  const orderedNotes = rows
    .map(row => {
      const name = row[0];
      const text = t[name];
      return text ? { name, text } : null;
    })
    .filter(Boolean);
  if (!columns.length || !rows.length) return null;
  return x.jsxs("section", {
    className: "benchmark-results",
    id: "benchmark-results",
    "data-toc": e.title,
    children: [
      e.title && x.jsx("h2", { className: "h benchmark-results__title", children: e.title }),
      x.jsx("div", {
        className: "benchmark-results__scroll",
        children: x.jsxs("table", {
          children: [
            x.jsx("thead", {
              children: x.jsx("tr", {
                children: columns.map((column, index) =>
                  x.jsx("th", { scope: "col", className: index === 1 ? "is-atria" : "", children: column }, index),
                ),
              }),
            }),
            x.jsx("tbody", {
              children: rows.map((row, rowIndex) => {
                const best = Math.max(
                  ...row.slice(1).map(value => {
                    const numeric = Number.parseFloat(value);
                    return Number.isFinite(numeric) ? numeric : -Infinity;
                  }),
                );
                return x.jsx(
                  "tr",
                  {
                    children: row.map((value, columnIndex) => {
                      if (columnIndex === 0) return x.jsx("th", { scope: "row", children: value }, columnIndex);
                      const numeric = Number.parseFloat(value);
                      const isBest = Number.isFinite(numeric) && numeric === best;
                      return x.jsx(
                        "td",
                        {
                          className: [columnIndex === 1 ? "is-atria" : "", isBest ? "is-best" : ""]
                            .filter(Boolean)
                            .join(" "),
                          children: value,
                        },
                        columnIndex,
                      );
                    }),
                  },
                  rowIndex,
                );
              }),
            }),
          ],
        }),
      }),
      orderedNotes.length > 0 &&
        x.jsx("ol", {
          className: "benchmark-results__notes",
          children: orderedNotes.map(note =>
            x.jsxs(
              "li",
              {
                children: [
                  x.jsx("strong", { children: note.name }),
                  x.jsx("span", { dangerouslySetInnerHTML: { __html: Or(note.text) } }),
                ],
              },
              note.name,
            ),
          ),
        }),
    ],
  });
}.toString();
bundle = bundle.replace(oldCases, benchmarkResultsRenderer + casesWithOutro);

const extrasStart = bundle.indexOf("function V0");
const extrasEnd = bundle.indexOf("/*! js-yaml", extrasStart);
if (extrasStart >= 0) {
  if (extrasEnd < 0) {
    throw new Error("Unable to locate availability/references renderer end");
  }
  bundle = bundle.slice(0, extrasStart) + bundle.slice(extrasEnd);
}

const navStart = bundle.indexOf("function Xg");
const navEnd = bundle.indexOf("function Zg", navStart);
const oldNav = bundle.slice(navStart, navEnd);
if (!oldNav.startsWith("function Xg")) {
  throw new Error("Unable to locate top navigation renderer");
}
const newNav = 'function Xg({links:e=[]}){const[t,n]=q.useState(!1);return q.useEffect(()=>{const r=()=>n(window.scrollY>80);return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),x.jsx("header",{className:`nav ${t?"nav--scrolled":""}`,children:x.jsxs("div",{className:"wrap nav__inner",children:[x.jsxs("a",{className:"nav__brand",href:"#top",children:[x.jsx("span",{className:"nav__logo","aria-hidden":"true"}),x.jsx("span",{children:"Atria Dawn Preview"})]}),x.jsx("nav",{className:"nav__quicklinks","aria-label":"项目链接",children:e.map((r,i)=>{const l=r.href&&r.href!=="#",s=Array.isArray(r.options)&&r.options.length>0;return s?x.jsxs("details",{className:"nav__token-menu",onKeyDown:o=>{o.key==="Escape"&&(o.currentTarget.removeAttribute("open"),o.currentTarget.querySelector("summary")?.focus())},children:[x.jsxs("summary",{className:"nav__quicklink nav__token-trigger",children:[r.label,x.jsx("span",{className:"nav__token-caret","aria-hidden":"true",children:"▾"})]}),x.jsx("div",{className:"nav__token-dropdown",children:r.options.map((o,a)=>x.jsxs("a",{className:"nav__token-option",href:o.href,target:"_blank",rel:"noreferrer",onClick:c=>c.currentTarget.closest("details")?.removeAttribute("open"),children:[x.jsx("span",{children:o.label}),x.jsx("span",{className:"nav__token-option-arrow","aria-hidden":"true",children:"↗"})]},a))})]},i):x.jsx("a",{className:`nav__quicklink ${l?"":"is-placeholder"}`,href:l?r.href:"#",target:l?"_blank":void 0,rel:l?"noreferrer":void 0,"aria-disabled":l?void 0:"true",onClick:l?void 0:o=>o.preventDefault(),children:r.label},i)})})]})})}';
const navWithHorizontalHyphen = newNav.replace('x.jsx("span",{children:"Atria Dawn Preview"})', 'x.jsxs("span",{className:"atria-wordmark",children:["Atria Dawn ",x.jsx("span",{className:"atria-preview",children:"Preview"})]})');
const navChildrenEnd = navWithHorizontalHyphen.lastIndexOf("]})})}");
const navWithLanguageSwitch = navWithHorizontalHyphen.slice(0, navChildrenEnd) + ',x.jsx(SiteLanguageSwitch,{})' + navWithHorizontalHyphen.slice(navChildrenEnd);
bundle = bundle.replace(oldNav, navWithLanguageSwitch);

bundle = bundle.replace(',"data-toc":"概述"', "");
bundle = bundle.replace(
  /(?:e\.kicker&&)+x\.jsx\("div",\{className:"kicker",children:e\.kicker\}\)/,
  'e.kicker&&x.jsx("div",{className:"kicker",children:e.kicker})',
);

const appStart = bundle.indexOf("function Qv");
const appEnd = bundle.indexOf("ws.createRoot", appStart);
const oldApp = bundle.slice(appStart, appEnd);
if (!oldApp.startsWith("function Qv")) {
  throw new Error("Unable to locate app renderer");
}
const newApp = 'function Qv(){return x.jsxs(x.Fragment,{children:[x.jsx(L0,{className:"particle-story-webgl",particleColors:["#123563","#17467d","#225a9c","#3972b8"],particleCount:1300,particleSpread:9,speed:.1,particleBaseSize:95,sizeRandomness:1,alphaParticles:!0,moveParticlesOnHover:!0,particleHoverFactor:1.4,cameraDistance:18,pixelRatio:typeof window<"u"?Math.min(window.devicePixelRatio,window.innerWidth<721?1:1.15):1,story:!0,logoUrl:"/assets/atria-logo.png?v=20260909"}),x.jsx(Xg,{links:En.hero.links}),x.jsx(Zg,{}),x.jsx(P0,{hero:En.hero}),x.jsxs("main",{className:"article",children:[x.jsx(R0,{overview:En.overview}),x.jsx(U0,{themes:En.themes}),x.jsx(BenchmarkResults,{table:En.benchmarkTable,notes:En.benchmarkNotes})]})]})}'

const appWithFinaleTitle = newApp.replace('x.jsx("section",{className:"particle-story__finale","aria-label":"Atria Dawn Preview"})', 'x.jsx("section",{className:"particle-story__finale","aria-label":"Atria Dawn Preview",children:x.jsx("h2",{className:"particle-story__finale-title",children:[x.jsxs("span",{className:"atria-wordmark",children:["Atria Dawn ",x.jsx("span",{className:"atria-preview",children:"Preview"})]}),x.jsxs("span",{className:"atria-reflection","aria-hidden":"true",children:["Atria Dawn ",x.jsx("span",{className:"atria-preview",children:"Preview"})]})]})})');
const appWithLocalizedContent = appWithFinaleTitle
  .replace("function Qv(){", "function Qv({content=En}){")
  .replaceAll("En.", "content.");
const appWithReducedParticleDpr = appWithLocalizedContent.replace(
  'pixelRatio:typeof window<"u"?Math.min(window.devicePixelRatio,window.innerWidth<721?1:1.15):1',
  "pixelRatio:1",
);
bundle = bundle.replace(oldApp, appWithReducedParticleDpr);

const uiStart = bundle.indexOf("function Xg");
const uiEnd = bundle.indexOf("/*! js-yaml", uiStart);
let uiBundle = bundle.slice(uiStart, uiEnd);
for (const signature of [
  "function Xg({links:e=[]}){",
  "function Zg(){",
  "function P0({hero:e={}}){",
  "function oc({media:e,title:t}){",
  "function b0({c:e}){",
  "function U0({themes:e=[]}){",
]) {
  const localizedSignature = `${signature}const siteLabels=useSiteLabels();`;
  if (!uiBundle.includes(localizedSignature)) uiBundle = uiBundle.replace(signature, localizedSignature);
}
const uiLabels = {
  projectLinks: "项目链接",
  comingSoon: "链接待补充",
  contents: "页面目录",
  viewCases: "查看案例 ",
  scrollToExplore: "滚动展开",
  mediaPlaceholder: " · 展示占位（视频 / 截图 / 交互）",
  benchmarkPlaceholder: "Benchmark 评测图预留区域",
  fullscreen: "全屏",
  exitFullscreen: "退出全屏",
};
for (const [key, label] of Object.entries(uiLabels)) {
  uiBundle = uiBundle.replaceAll(JSON.stringify(label), `siteLabels.${key}`);
}
uiBundle = uiBundle.replace('`视图 ${y+1}`', '`${siteLabels.view} ${y+1}`');
uiBundle = uiBundle.replace('a)}},[]),e.length===0', 'a)}},[siteLabels]),e.length===0');
bundle = bundle.slice(0, uiStart) + uiBundle + bundle.slice(uiEnd);

const languageBlock = `${languageStartMarker}const siteEnglishContent = Wv(${JSON.stringify(englishContent)});\nconst siteCitationBibtex = ${JSON.stringify(siteCitationBibtex)};\n${languageSource}${languageEndMarker}`;
const rootMount = 'ws.createRoot(document.getElementById("root"))';
if (!bundle.includes(rootMount)) throw new Error("Unable to locate the application mount");
bundle = bundle.replace(rootMount, `${languageBlock}${rootMount}`);
bundle = bundle.replace("children:x.jsx(Qv,{})", "children:x.jsx(SiteApp,{})");

bundle = bundle
  .replace('function Lc(e,t){', 'function Lc(e,t){if(e.includes("/cases/protein-interactive/"))return {type:"iframe",src:e,label:t,designW:1280,designH:720};if(e.includes("/cases/excel-agent-demo.html"))return {type:"iframe",src:e,label:t,designW:1280,designH:720};if(e.includes("/cases/guandu.html"))return {type:"iframe",src:e,label:t,designW:1280,designH:800};')
  .replaceAll('"Atria Dawn ",x.jsx("span",{className:"atria-preview",children:"Preview"})', '"Atria Dawn"')
  // Keep model names in comparison data intact; only the site's fallback brand
  // changes from the Preview template to the official release.
  .replace('brand:n.brand||"Atria Dawn Preview"', 'brand:n.brand||"Atria Dawn"');

const bundleHash = createHash("sha256").update(bundle).digest("hex").slice(0, 10);
const bundleName = `index-atria-${bundleHash}.js`;
const outputBundlePath = new URL(`./dist/assets/${bundleName}`, import.meta.url);
const updatedIndex = applySiteMetadata(index.replace(
  `/assets/${scriptMatch[1]}`,
  `/assets/${bundleName}`,
), { site: "release" });

fs.writeFileSync(outputBundlePath, bundle);
fs.writeFileSync(indexPath, updatedIndex);
console.log(`Embedded ${content.length} characters into ${outputBundlePath.pathname}`);
console.log(`Updated dist/index.html to /assets/${bundleName}`);
