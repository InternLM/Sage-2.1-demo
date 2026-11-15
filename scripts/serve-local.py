from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import os,re
os.chdir(Path(__file__).resolve().parents[1]/'dist')
class Handler(SimpleHTTPRequestHandler):
 def send_head(self):
  path=self.translate_path(self.path)
  if os.path.isfile(path) and 'Range' in self.headers:
   size=os.path.getsize(path);m=re.fullmatch(r'bytes=(\d+)-(\d*)',self.headers['Range'])
   if m:
    start=int(m[1]);end=min(int(m[2]) if m[2] else size-1,size-1)
    if start>=size or end<start:
     self.send_response(416);self.send_header('Content-Range',f'bytes */{size}');self.end_headers();return None
    f=open(path,'rb');f.seek(start);self.remaining=end-start+1
    self.send_response(206);self.send_header('Content-Type',self.guess_type(path));self.send_header('Content-Range',f'bytes {start}-{end}/{size}');self.send_header('Content-Length',str(self.remaining));self.send_header('Accept-Ranges','bytes');self.end_headers();return f
  self.remaining=None
  return super().send_head()
 def copyfile(self,source,outputfile):
  try:
   if self.remaining is None:return super().copyfile(source,outputfile)
   while self.remaining:
    data=source.read(min(65536,self.remaining))
    if not data:break
    outputfile.write(data);self.remaining-=len(data)
  except (BrokenPipeError,ConnectionResetError):pass
print('Sage-2.1 preview: http://127.0.0.1:4173',flush=True)
ThreadingHTTPServer(('127.0.0.1',4173),Handler).serve_forever()
