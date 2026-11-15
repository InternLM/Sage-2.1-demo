/* Opening logo based on the Metallic Paint visual language from ReactBits.
 * Shape/depth preprocessing is done ahead of time, and rendering pauses once
 * the hero is gone so this effect does not add work to long-page scrolling. */
const metallicLogoVertexShader=`#version 300 es
precision highp float;
in vec2 a_position;
out vec2 vP;
void main(){vP=a_position*.5+.5;gl_Position=vec4(a_position,0.,1.);}`;

const metallicLogoFragmentShader=`#version 300 es
precision highp float;
in vec2 vP;
out vec4 oC;
uniform sampler2D u_tex;
uniform float u_time,u_ratio,u_imgRatio,u_seed,u_scale,u_refract,u_blur,u_liquid;
uniform float u_bright,u_contrast,u_angle,u_fresnel,u_sharp,u_wave,u_noise,u_chroma;
uniform float u_distort,u_contour,u_transition;
uniform vec3 u_lightColor,u_darkColor,u_tint;

vec3 sC,sM;

vec3 pW(vec3 v){
  vec3 i=floor(v),f=fract(v),s=sign(fract(v*.5)-.5),h=fract(sM*i+i.yzx),c=f*(f-1.);
  return s*c*((h*16.-4.)*c-1.);
}

vec3 aF(vec3 b,vec3 c){return pW(b+c.zxy-pW(b.zxy+c.yzx)+pW(b.yzx+c.xyz));}
vec3 lM(vec3 s,vec3 p){return(p+aF(s,p))*.5;}

vec2 fA(){
  vec2 c=vP-.5;
  c.x*=u_ratio>u_imgRatio?u_ratio/u_imgRatio:1.;
  c.y*=u_ratio>u_imgRatio?1.:u_imgRatio/u_ratio;
  return vec2(c.x+.5,.5-c.y);
}

vec2 rot(vec2 p,float r){float c=cos(r),s=sin(r);return vec2(p.x*c+p.y*s,p.y*c-p.x*s);}

float bM(vec2 c,float t){
  vec2 l=smoothstep(vec2(0.),vec2(t),c),u=smoothstep(vec2(0.),vec2(t),1.-c);
  return l.x*l.y*u.x*u.y;
}

float mG(float hi,float lo,float t,float sh,float cv){
  sh*=(2.-u_sharp);
  float ci=smoothstep(.15,.85,cv),r=lo;
  float e1=.08/u_scale;
  r=mix(r,hi,smoothstep(0.,sh*1.5,t));
  r=mix(r,lo,smoothstep(e1-sh,e1+sh,t));
  float e2=e1+.05/u_scale*(1.-ci*.35);
  r=mix(r,hi,smoothstep(e2-sh,e2+sh,t));
  float e3=e2+.025/u_scale*(1.-ci*.45);
  r=mix(r,lo,smoothstep(e3-sh,e3+sh,t));
  float e4=e1+.1/u_scale;
  r=mix(r,hi,smoothstep(e4-sh,e4+sh,t));
  float rm=1.-e4,gT=clamp((t-e4)/rm,0.,1.);
  r=mix(r,mix(hi,lo,smoothstep(0.,1.,gT)),smoothstep(e4-sh*.5,e4+sh*.5,t));
  return r;
}

void main(){
  sC=fract(vec3(.7548,.5698,.4154)*(u_seed+17.31))+.5;
  sM=fract(sC.zxy-sC.yzx*1.618);
  vec2 sc=vec2(vP.x*u_ratio,1.-vP.y);
  float angleRad=u_angle*3.14159/180.;
  sc=rot(sc-.5,angleRad)+.5;
  sc=clamp(sc,0.,1.);
  float sl=sc.x-sc.y,an=u_time*.001;
  vec2 iC=fA();
  float meltNoise=pW(vec3(iC*6.2+vec2(an*.025,-an*.018),an*.14)).x*.5+.5;
  float meltRibbon=sin(iC.y*22.+iC.x*8.-an*1.7+meltNoise*3.)*.5+.5;
  vec2 liquidOffset=vec2(
    sin(iC.y*19.+an*1.15+meltNoise*2.4),
    cos(iC.x*16.-an*.92+meltNoise*2.1)
  )*(.009*u_transition);
  iC+=liquidOffset;
  vec2 texel=1./vec2(textureSize(u_tex,0));
  vec4 texSample=texture(u_tex,iC);
  float alphaSample=texSample.a*.5;
  alphaSample+=texture(u_tex,iC+vec2(texel.x,0.)).a*.125;
  alphaSample+=texture(u_tex,iC-vec2(texel.x,0.)).a*.125;
  alphaSample+=texture(u_tex,iC+vec2(0.,texel.y)).a*.125;
  alphaSample+=texture(u_tex,iC-vec2(0.,texel.y)).a*.125;
  float edgeAA=max(fwidth(alphaSample)*.72,.0038);
  float dp=texSample.r;
  float shapeMask=smoothstep(.34-edgeAA,.72+edgeAA,alphaSample);
  float dissolveField=.08+.70*clamp(meltNoise*.58+meltRibbon*.42+(iC.y-.5)*.10,0.,1.);
  float dissolved=1.-smoothstep(dissolveField,dissolveField+.18,u_transition);
  shapeMask*=dissolved;
  vec3 hi=u_lightColor*u_bright;
  vec3 lo=u_darkColor*(2.-u_bright);
  lo.b+=smoothstep(.6,1.4,sc.x+sc.y)*.08;
  vec2 fC=sc-.5;
  float rd=length(fC+vec2(0.,sl*.15));
  vec2 ag=rot(fC,(.22-sl*.18)*3.14159);
  float cv=1.-pow(rd*1.65,1.15);
  cv*=pow(sc.y,.35);
  float vs=shapeMask;
  vs*=bM(iC,.01);
  float fr=pow(1.-cv,u_fresnel)*.08;
  vs=min(vs+fr*vs,1.);
  float mT=an*.0625;
  vec3 wO=vec3(-1.05,1.35,1.55);
  vec3 wA=aF(vec3(31.,73.,56.),mT+wO)*.22*u_wave;
  vec3 wB=aF(vec3(24.,64.,42.),mT-wO.yzx)*.22*u_wave;
  vec2 nC=sc*45.*u_noise;
  nC+=aF(sC.zxy,an*.17*sC.yzx-sc.yxy*.35).xy*18.*u_wave;
  vec3 tC=vec3(.00041,.00053,.00076)*mT+wB*nC.x+wA*nC.y;
  tC=lM(sC,tC);
  tC=lM(sC+1.618,tC);
  float tb=sin(tC.x*3.14159)*.5+.5;
  tb=tb*2.-1.;
  float noiseVal=pW(vec3(sc*8.+an,an*.5)).x;
  float edgeFactor=smoothstep(0.,.5,dp)*smoothstep(1.,.5,dp);
  float lD=dp+(1.-dp)*u_liquid*tb;
  lD+=noiseVal*u_distort*.15*edgeFactor;
  float rB=clamp(1.-cv,0.,1.);
  float fl=ag.x+sl;
  fl+=noiseVal*sl*u_distort*edgeFactor;
  fl*=mix(1.,1.-dp*.5,u_contour);
  fl-=dp*u_contour*.8;
  float eI=smoothstep(0.,1.,lD)*smoothstep(1.,0.,lD);
  fl-=tb*sl*1.8*eI;
  float cA=cv*clamp(pow(sc.y,.12),.25,1.);
  fl*=.12+(1.05-lD)*cA;
  fl*=smoothstep(1.,.65,lD);
  float vA1=smoothstep(.08,.18,sc.y)*smoothstep(.38,.18,sc.y);
  float vA2=smoothstep(.08,.18,1.-sc.y)*smoothstep(.38,.18,1.-sc.y);
  fl+=vA1*.16+vA2*.025;
  fl*=.45+pow(sc.y,2.)*.55;
  fl*=u_scale;
  fl-=an;
  float rO=rB+cv*tb*.025;
  float vM1=smoothstep(-.12,.18,sc.y)*smoothstep(.48,.08,sc.y);
  float cM1=smoothstep(.35,.55,cv)*smoothstep(.95,.35,cv);
  rO+=vM1*cM1*4.5;
  rO-=sl;
  float bO=rB*1.25;
  float vM2=smoothstep(-.02,.35,sc.y)*smoothstep(.75,.08,sc.y);
  float cM2=smoothstep(.35,.55,cv)*smoothstep(.75,.35,cv);
  bO+=vM2*cM2*.9;
  bO-=lD*.18;
  rO*=u_refract*u_chroma;
  bO*=u_refract*u_chroma;
  float sf=u_blur;
  float rP=fract(fl+rO);
  float rC=mG(hi.r,lo.r,rP,sf+.018+u_refract*cv*.025,cv);
  float gP=fract(fl);
  float gC=mG(hi.g,lo.g,gP,sf+.008/max(.01,1.-sl),cv);
  float bP=fract(fl-bO);
  float bC=mG(hi.b,lo.b,bP,sf+.008,cv);
  vec3 col=vec3(rC,gC,bC);
  col=(col-.5)*u_contrast+.5;
  col=clamp(col,0.,1.);
  col=mix(col,1.-min(vec3(1.),(1.-col)/max(u_tint,vec3(.001))),length(u_tint-1.)*.5);
  col=clamp(col,0.,1.);
  float liquidEdge=1.-smoothstep(.0,.16,abs(u_transition-dissolveField));
  col=mix(col,col*vec3(.72,.80,.92)+vec3(.10),liquidEdge*u_transition*.32);
  oC=vec4(col*vs,vs);
}`;

function MetallicLogoLayer({imageSrc="/assets/atria-logo-metallic-mask.png?v=20260912-metaball-v3"}){
  const rootRef=q.useRef(null),canvasRef=q.useRef(null);
  q.useEffect(()=>{
    const root=rootRef.current,canvas=canvasRef.current;if(!root||!canvas)return;
    const reduced=!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const gl=canvas.getContext("webgl2",{alpha:true,antialias:true,premultipliedAlpha:true,powerPreference:"high-performance"});
    if(!gl){root.dataset.fallback="true";return}
    let disposed=false,raf=0,scrollRaf=0,resizeRaf=0,texture=null,program=null,buffer=null,ready=false,active=true,lastTime=performance.now(),animTime=0;
    const compile=(source,type)=>{const shader=gl.createShader(type);if(!shader)return null;gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){console.error("Metallic logo shader:",gl.getShaderInfoLog(shader));gl.deleteShader(shader);return null}return shader};
    const vertex=compile(metallicLogoVertexShader,gl.VERTEX_SHADER),fragment=compile(metallicLogoFragmentShader,gl.FRAGMENT_SHADER);
    if(!vertex||!fragment){root.dataset.fallback="true";return}
    program=gl.createProgram();gl.attachShader(program,vertex);gl.attachShader(program,fragment);gl.linkProgram(program);gl.deleteShader(vertex);gl.deleteShader(fragment);
    if(!gl.getProgramParameter(program,gl.LINK_STATUS)){console.error("Metallic logo program:",gl.getProgramInfoLog(program));root.dataset.fallback="true";return}
    gl.useProgram(program);buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
    const position=gl.getAttribLocation(program,"a_position");gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
    const uniforms={};for(let i=0,count=gl.getProgramParameter(program,gl.ACTIVE_UNIFORMS);i<count;i++){const info=gl.getActiveUniform(program,i);if(info)uniforms[info.name]=gl.getUniformLocation(program,info.name)}
    const f=(name,value)=>gl.uniform1f(uniforms[name],value),v3=(name,a,b,c)=>gl.uniform3f(uniforms[name],a,b,c);
    f("u_seed",42);f("u_scale",4.25);f("u_refract",.006);f("u_blur",.008);f("u_liquid",.68);f("u_bright",1.42);f("u_contrast",.58);f("u_angle",0);f("u_fresnel",.44);f("u_sharp",1.12);f("u_wave",.9);f("u_noise",.46);f("u_chroma",.58);f("u_distort",.82);f("u_contour",.068);f("u_transition",0);
    v3("u_lightColor",1,1,1);v3("u_darkColor",0,0,0);v3("u_tint",1,.702,.999);gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);gl.clearColor(0,0,0,0);
    const ease=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,clamp=t=>Math.min(1,Math.max(0,t));
    const stop=()=>{if(raf)cancelAnimationFrame(raf);raf=0};
    const draw=now=>{if(disposed||!ready)return;const delta=Math.min(40,now-lastTime);lastTime=now;if(!reduced)animTime+=delta*.3;f("u_time",animTime);gl.clear(gl.COLOR_BUFFER_BIT);gl.drawArrays(gl.TRIANGLE_STRIP,0,4)};
    const loop=now=>{raf=0;if(!active||disposed)return;if(now-lastTime>=(window.innerWidth<721?42:32))draw(now);raf=requestAnimationFrame(loop)};
    const start=()=>{if(!ready||raf||disposed)return;if(reduced){draw(performance.now());return}lastTime=performance.now()-33;raf=requestAnimationFrame(loop)};
    const updateScroll=()=>{scrollRaf=0;const hero=document.querySelector(".hero"),vh=window.innerHeight,heroEnd=hero?Math.max(vh*.72,hero.offsetTop+hero.offsetHeight-vh):vh*.8,p=ease(clamp(window.scrollY/(heroEnd*.26))),opacity=1-ease(clamp((p-.68)/.32));f("u_transition",p);root.style.setProperty("--metallic-progress",p.toFixed(4));root.style.setProperty("--metallic-shift",`${(p*8).toFixed(2)}px`);root.style.setProperty("--metallic-scale",(1+p*.012).toFixed(4));root.style.setProperty("--metallic-opacity",opacity.toFixed(4));active=p<.995&&!document.hidden;if(active)start();else stop()};
    const queueScroll=()=>{if(!scrollRaf)scrollRaf=requestAnimationFrame(updateScroll)};
    const resize=()=>{resizeRaf=0;const rect=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,window.innerWidth<721?1.75:1.8),width=Math.max(1,Math.round(rect.width*dpr)),height=Math.max(1,Math.round(rect.height*dpr));if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;gl.viewport(0,0,width,height)}f("u_ratio",rect.width/Math.max(1,rect.height));if(ready)draw(performance.now())};
    const queueResize=()=>{if(!resizeRaf)resizeRaf=requestAnimationFrame(resize)};
    const image=new Image();image.onload=()=>{if(disposed)return;texture=gl.createTexture();gl.activeTexture(gl.TEXTURE0);gl.bindTexture(gl.TEXTURE_2D,texture);gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);gl.uniform1i(uniforms.u_tex,0);f("u_imgRatio",image.naturalWidth/image.naturalHeight);ready=true;root.dataset.ready="true";resize();updateScroll();if(reduced)draw(performance.now());else start()};image.onerror=()=>{root.dataset.fallback="true"};image.src=imageSrc;
    const visibility=()=>{active=!document.hidden&&Number.parseFloat(getComputedStyle(root).opacity||"1")>.012;if(active)start();else stop()};
    window.addEventListener("scroll",queueScroll,{passive:true});window.addEventListener("resize",queueResize,{passive:true});document.addEventListener("visibilitychange",visibility);resize();updateScroll();
    return()=>{disposed=true;stop();if(scrollRaf)cancelAnimationFrame(scrollRaf);if(resizeRaf)cancelAnimationFrame(resizeRaf);window.removeEventListener("scroll",queueScroll);window.removeEventListener("resize",queueResize);document.removeEventListener("visibilitychange",visibility);if(texture)gl.deleteTexture(texture);if(buffer)gl.deleteBuffer(buffer);if(program)gl.deleteProgram(program)};
  },[imageSrc]);
  return x.jsxs("div",{ref:rootRef,className:"metallic-logo-layer","aria-hidden":"true",children:[x.jsx("canvas",{ref:canvasRef,className:"metallic-logo-canvas"}),x.jsx("img",{className:"metallic-logo-fallback",src:"/assets/atria-logo-hq.png?v=20260912-metaball-v3",alt:""})]});
}
