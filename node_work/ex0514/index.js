// 단방향 암호화
// const crypto = require('crypto')

const http = require('http');
const fs = require('fs').promises;

http.createServer( async (req, res) => {
try {
    const password = '비밀번호';
    const indexhtml = await fs.readFile('./index.html');

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(indexhtml);
} catch(e) {
    console.log(e);
    res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(e.message);
}
    // res.end('<html><body><h1>하이</h1></body></html>\n');
}).listen(8080, '0.0.0.0', () => {
  console.log('8080 포트에서 서버대기중')
});