function SageCase({entry:c,id}){
 const [selected,setSelected]=q.useState(0);const host=q.useRef(null);const tabs=q.useRef([]);
 const media={designW:1280,designH:850,...(c.medias?c.medias[selected]:{...c,type:c.type||'video'})};
 const select=index=>{host.current?.querySelectorAll('video').forEach(v=>v.pause());setSelected(index);};
 const onKey=(event,index)=>{let next;if(event.key==='ArrowRight')next=(index+1)%c.medias.length;else if(event.key==='ArrowLeft')next=(index+c.medias.length-1)%c.medias.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=c.medias.length-1;else return;event.preventDefault();select(next);tabs.current[next]?.focus();};
 return x.jsxs('article',{className:'sage-source-case',id,ref:host,children:[
  x.jsxs('div',{className:'read',children:[x.jsx('h3',{className:'h case__title',children:c.title}),x.jsx('p',{className:'p',children:c.description||media.description})]}),
  x.jsxs('figure',{className:'sage-source-media',children:[
   x.jsx('div',{id:id+'-panel',role:c.medias?'tabpanel':undefined,'aria-labelledby':c.medias?id+'-tab-'+selected:undefined,children:media.type==='video'?x.jsx('video',{className:'case__video',src:media.src,poster:media.poster,controls:true,preload:'metadata',playsInline:true,muted:true,'aria-label':media.label||c.title},media.src):x.jsx(oc,{media,title:media.label||c.title},media.src)}),
   x.jsx('figcaption',{className:'sage-source-caption',children:media.caption}),
   c.medias&&x.jsx('div',{className:'sage-thumbnail-tabs',style:{'--sage-tab-count':c.medias.length},role:'tablist','aria-label':c.title,children:c.medias.map((m,i)=>x.jsxs('button',{id:id+'-tab-'+i,ref:el=>tabs.current[i]=el,type:'button',role:'tab',tabIndex:selected===i?0:-1,'aria-selected':selected===i,'aria-controls':id+'-panel',className:'sage-thumbnail-tab '+(selected===i?'is-active':''),onClick:()=>select(i),onKeyDown:e=>onKey(e,i),children:[x.jsx('img',{src:m.poster,alt:'',width:640,height:360,loading:'lazy'}),x.jsx('span',{children:m.label})]},m.src))})
  ]})
 ]});
}
function SageArticle(){
 const {language}=q.useContext(SiteLanguageContext);const copy=sageArticle[language];const zh=language==='zh';
 const paragraph=(text,key)=>x.jsx('p',{className:'p',dangerouslySetInnerHTML:{__html:H.parseInline(text)}},key);
 return x.jsxs('main',{className:'article sage-source-article',children:[
  x.jsxs('section',{id:'overview',className:'read','data-toc':zh?'总览':'Overview',children:[x.jsx('h2',{className:'h',children:copy.title}),...copy.opening.map(paragraph)]}),
  x.jsx(SageOverviewChart,{}),
  x.jsxs('section',{id:'cases','data-toc':'Demo',children:[
   x.jsx('header',{className:'read sage-demo-heading',children:x.jsx('h2',{className:'h',children:'Demo'})}),
   x.jsx('div',{className:'read sage-source-intro',children:paragraph(copy.intro)}),
   ...copy.cases.map((c,i)=>x.jsx(SageCase,{entry:c,id:'demo-'+i},i)),
   x.jsxs('div',{className:'read sage-source-ending',children:[...copy.ending.map(paragraph),x.jsx('a',{href:'https://discovery.intern-ai.org.cn/',target:'_blank',rel:'noreferrer',children:copy.api})]})
  ]}),x.jsx(SageEvaluation,{})
 ]});
}
