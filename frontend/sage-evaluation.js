function SageOverviewChart(){const {language}=q.useContext(SiteLanguageContext);return x.jsxs('figure',{className:'sage-overview-chart',children:[x.jsx('img',{src:'/cases/sage/benchmarks.svg',alt:language==='zh'?'Sage-S2.1 Flash 与其他模型的八项评测结果对比':'Eight benchmark comparisons for Sage-S2.1 Flash',width:1408,height:678}),null]})}
function SageEvaluation(){
 const {language}=q.useContext(SiteLanguageContext);const zh=language==='zh';
 return x.jsxs('section',{className:'sage-evaluation',id:'evaluation','data-toc':zh?'评测结果':'Evaluation',children:[
  x.jsxs('div',{className:'read',children:[x.jsx('h2',{className:'h',children:zh?'完整评测结果':'Full Evaluation Results'})]}),
  x.jsx('div',{className:'sage-table-scroll',children:x.jsxs('table',{className:'sage-table',children:[
   x.jsx('thead',{children:x.jsx('tr',{children:sageEvaluation.columns.map((c,i)=>x.jsx('th',{scope:'col',children:i===0?(zh?'评测项目':'Benchmark'):c},i))})}),
   x.jsx('tbody',{children:sageEvaluation.rows.map((row,r)=>x.jsx('tr',{children:row.map((v,c)=>x.jsx(c===0?'th':'td',{scope:c===0?'row':undefined,className:c===1?'sage-score':undefined,'data-model':c>0?sageEvaluation.columns[c]:undefined,children:v},c))},r))})
  ]})}),
  x.jsxs('div',{className:'sage-methodology read',children:[x.jsx('h3',{children:zh?'评测设定':'Evaluation settings'}),x.jsx('ol',{children:sageEvaluation.notes[language].map(([name,note],i)=>x.jsxs('li',{children:[x.jsx('strong',{children:name+' — '}),note]},i))})]}),

 ]});
}
