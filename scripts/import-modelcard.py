"""Import the supplied model card without executing its HTML or JavaScript."""
from html.parser import HTMLParser
from pathlib import Path
import base64, hashlib, json, re, sys

class Node:
    def __init__(self, tag='', attrs=()): self.tag=tag; self.attrs=dict(attrs); self.children=[]
    def text(self): return ''.join(c if isinstance(c,str) else c.text() for c in self.children)
    def all(self, tag):
        for c in self.children:
            if isinstance(c,Node):
                if c.tag==tag: yield c
                yield from c.all(tag)
class Parser(HTMLParser):
    def __init__(self): super().__init__(); self.root=Node(); self.stack=[self.root]
    def handle_starttag(self,tag,attrs):
        n=Node(tag,attrs);self.stack[-1].children.append(n)
        if tag not in {'img','meta','link','hr','br','input','source','wbr'}:self.stack.append(n)
    def handle_endtag(self,tag):
        for i in range(len(self.stack)-1,0,-1):
            if self.stack[i].tag==tag:self.stack=self.stack[:i];break
    def handle_data(self,data):self.stack[-1].children.append(data)

def normalized(s): return s.strip().replace('Sage S2.1 Flash','Sage 2.1 Flash')
source=Path(sys.argv[1]);root=Path(__file__).resolve().parent.parent
raw=source.read_text();parser=Parser();parser.feed(raw)
table=next(parser.root.all('table'));head=next(table.all('thead'))
columns=[normalized(n.text()) for n in head.all('th')]
headers=list(head.all('th'));external=[i for i,n in enumerate(headers) if 'ext' in n.attrs.get('class','').split()]
rows=[];groups=[];best=[]
translations={'Agentic Coding':'智能体编程','Productivity':'生产力','Tool Use':'工具使用','Cybersecurity':'网络安全','ML Engineering':'机器学习工程','Deep Research':'深度研究','Search':'搜索','Vision':'视觉'}
for tr in next(table.all('tbody')).all('tr'):
    cells=[c for c in tr.children if isinstance(c,Node) and c.tag in {'td','th'}]
    if 'grp' in tr.attrs.get('class','').split():
        title=normalized(cells[0].text());groups.append({'start':len(rows),'zh':translations[title],'en':title});continue
    rows.append([normalized(c.text()) for c in cells]);best.append([i for i,c in enumerate(cells) if 'best' in c.attrs.get('class','').split()])
notes={'zh':[],'en':[]}
for li in next(parser.root.all('ol')).all('li'):
    title=next(li.all('b'))
    for lang in notes:
        label=next(n for n in title.all('span') if lang in n.attrs.get('class','').split())
        body=next(n for n in li.all('span') if n.attrs.get('lang')==('zh-CN' if lang=='zh' else 'en'))
        notes[lang].append([normalized(label.text()),normalized(body.text())])
chart=next(n for n in parser.root.all('img') if 'chart' in n.attrs.get('class','').split())
svg=base64.b64decode(chart.attrs['src'].split(',',1)[1]).decode()
# Preserve the supplied vector chart; replace only the model-name legend.
match=re.search(r'<g id="(text_\d+)">\s*<!-- Sage S2\.1 Flash -->',svg)
assert match
end=svg.index('\n   </g>',match.end())+len('\n   </g>')
block=svg[match.start():end]
x,y=re.search(r'translate\(([-\d.]+) ([-\d.]+)\)',block).groups()
svg=svg[:match.start()]+f'<g id="{match.group(1)}"><text x="{x}" y="{y}" fill="#333333" font-family="DejaVu Sans,Arial,sans-serif" font-size="12" font-weight="700">Sage 2.1 Flash</text></g>'+svg[end:]
chart_intro={lang:normalized(next(n for n in parser.root.all('p') if lang in n.attrs.get('class','').split()).text()) for lang in notes}
assert len(rows)==34 and all(len(r)==10 for r in rows)
assert len(notes['zh'])==len(notes['en'])==35
security=next(i for i,g in enumerate(groups) if g['en']=='Cybersecurity')
assert [r[0] for r in rows[groups[security]['start']:groups[security+1]['start']]]==['CyberGym']
assert not any('ExploitGym' in str(v) for v in [rows,notes])
data={'columns':columns,'rows':rows,'groups':groups,'best':best,'externalColumns':external,'chartIntro':chart_intro,'notes':notes}
(root/'docs/sage-evaluation.json').write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
(root/'docs/sage-benchmarks.tsv').write_text('\n'.join('\t'.join(r) for r in [columns,*rows])+'\n')
(root/'dist/cases/sage/benchmarks.svg').write_text('\n'.join(line.rstrip() for line in svg.splitlines())+'\n')
(root/'docs/benchmark-source.json').write_text(json.dumps({'source':source.name,'sha256':hashlib.sha256(source.read_bytes()).hexdigest(),'benchmarks':34,'models':9,'chartBenchmarks':15,'notesPerLanguage':35,'securityBenchmarks':['CyberGym'],'modelName':'Sage 2.1 Flash'},ensure_ascii=False,indent=2)+'\n')
print(f'Imported {len(rows)} benchmarks, {len(columns)-1} models, {len(groups)} groups and {len(notes["en"])} notes per language.')
