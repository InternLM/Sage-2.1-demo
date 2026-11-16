function SageOverviewChart(){const {language}=q.useContext(SiteLanguageContext);return x.jsxs('figure',{className:'sage-overview-chart',children:[x.jsx('img',{src:'/cases/sage/benchmarks.svg?v=37a62ce164',alt:language==='zh'?'Sage 2.1 Flash 与五个基线模型的十五项评测结果对比':'Sage 2.1 Flash and five baselines on 15 benchmarks',width:1440,height:741.924}),x.jsx('figcaption',{className:'sage-chart-caption',children:sageEvaluation.chartIntro[language]})]})}
function SageEvaluation(){
 const {language}=q.useContext(SiteLanguageContext);const zh=language==='zh';
 const external=c=>sageEvaluation.externalColumns.includes(c);
 const firstExternal=sageEvaluation.externalColumns[0];
 const rowNodes=sageEvaluation.rows.flatMap((row,r)=>{
  const group=sageEvaluation.groups.find(g=>g.start===r);
  const nodes=group?[x.jsx('tr',{className:'sage-evaluation-group',children:x.jsx('th',{colSpan:sageEvaluation.columns.length,scope:'colgroup',children:group[language]})},'group-'+r)]:[];
  nodes.push(x.jsx('tr',{'data-benchmark':row[0],children:row.map((v,c)=>x.jsx(c===0?'th':'td',{scope:c===0?'row':undefined,className:[c===1?'sage-score':'',sageEvaluation.best[r].includes(c)?'sage-best':'',external(c)?'sage-external':'',c===firstExternal?'sage-external-first':''].filter(Boolean).join(' ')||undefined,'data-model':c>0?sageEvaluation.columns[c]:undefined,children:v},c))},row[0]));return nodes;
 });
 return x.jsxs('section',{className:'sage-evaluation',id:'evaluation','data-toc':zh?'评测结果':'Evaluation',children:[
  x.jsx('div',{className:'read',children:x.jsx('h2',{className:'h',children:zh?'完整评测结果':'Full Evaluation Results'})}),
  x.jsx('div',{className:'sage-table-scroll',children:x.jsxs('table',{className:'sage-table',children:[
   x.jsx('thead',{children:x.jsx('tr',{children:sageEvaluation.columns.map((c,i)=>x.jsxs('th',{scope:'col',className:[external(i)?'sage-external':'',i===firstExternal?'sage-external-first':''].filter(Boolean).join(' ')||undefined,children:[i===0?(zh?'评测项目':'Benchmark'):c,external(i)&&x.jsx('span',{className:'sage-reference-label',children:zh?'引用成绩':'Reference'})]},i))})}),
   x.jsx('tbody',{children:rowNodes})
  ]})}),
  x.jsxs('div',{className:'sage-methodology read',children:[x.jsx('h3',{children:zh?'评测设定':'Evaluation settings'}),x.jsx('ol',{children:sageEvaluation.notes[language].map(([name,note],i)=>x.jsxs('li',{children:[x.jsx('strong',{children:name+' — '}),note]},i))})]})
 ]});
}
