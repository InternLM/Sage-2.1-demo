function P0({hero={}}) {
  const {language} = q.useContext(SiteLanguageContext);
  const zh = language === 'zh';
  return x.jsxs('section', {className:'sage-hero',id:'top',children:[
    x.jsxs('div',{className:'sage-hero__composition',children:[
    x.jsx('div',{className:'sage-logo-drawing','aria-hidden':true,dangerouslySetInnerHTML:{__html:sageLogoSvg}}),
    x.jsxs('div',{className:'sage-hero__copy',children:[
      x.jsx('h1',{className:'sage-title',children:'Sage 2.1 Flash'}),
      x.jsx('p',{className:'sage-tagline',children:zh?'以推理探索，以行动求证':'Explore through reasoning. Verify through action.'}),
      x.jsx('p',{className:'sage-description',children:zh?'面向高难度科学研究的前沿科学多模态智能体模型。':'A frontier scientific multimodal agent model for demanding research.'}),
      x.jsxs('div',{className:'sage-actions',children:[x.jsxs('a',{className:'sage-button',href:'#cases',children:[zh?'探索能力与案例':'Explore the demos',x.jsx('span',{'aria-hidden':true,children:'↗'})]}),x.jsx('a',{className:'sage-link',href:'https://discovery.intern-ai.org.cn/',target:'_blank',rel:'noreferrer',children:zh?'体验 API ↗':'Try the API ↗'})]})
    ]}),
    ]}),
  ]});
}
