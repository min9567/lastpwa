// 단방향 암호화
// const crypto = require('crypto')

const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
    console.log(req.url);
    try {
        if (req.url === '/') {
            const password = '비밀번호';
            const indexhtml = await fs.readFile('./index.html');
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            return  res.end(indexhtml);
        }
        else if (req.url === '/join' && req.method === 'POST'){
            // 한글이 들어오는거 맞추기 위해서 utf-8로 인코딩
            req.setEncoding('utf8');

            // body 문자열선언
            let body = '';
            // request 요청한 클라인거 data로 들어오는게 있으면
            // data를 모아서 body에 넣어준다.
            req.on('data', (data) => {
                body += data;
            });
            req.on('end', () => {
                // body 출력
                console.log(body);
                // body를 json.parse로 객체 변환
                const {id, password} = JSON.parse(body);
                console.log(id, password);
            })


            const obj = {name : "홍길동", age : 20}
            res.writeHead(201, {'Content-Type': 'application/json; charset=utf-8'});
            return res.end(JSON.stringify(obj));
        } else if (req.url === '/login') {
            res.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8'});
            return  res.end('로그인 성공');
        }

            res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
            return res.end('잘못된 경로')

    }catch(e)
        {
            console.log(e);
            res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
            res.end(e.message);
        }
        // res.end('<html><body><h1>하이</h1></body></html>\n');
    }
).
    listen(8080, '0.0.0.0', () => {
        console.log('8080 포트에서 서버대기중')
    });