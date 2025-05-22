const pool = require("./db");
const express = require("express"); // http 모듈 확장한 프레임워크
const path = require("path"); // 경로관리 모듈
const morgan = require("morgan"); // 서버 접속 기록 남기는 모듈
const cookieParser = require("cookie-parser");

console.log(process.env.COOKIE_SECRET);
const app = express();

// dev 개발단계, combined 실제운영 배포환경에서 많이씀
// app.use(morgan("combined"));
// public 폴더에 해당하는 파일이 있으면 클라이언트에게 줌.
// images 클라이언트가 접속방법을 설정
app.use("/images", express.static(path.join(__dirname, "public")));
// req.body 파라메타 받아주는거 {id:"aaa@naver.com"}
app.use(express.json());
// req.query ? aa=10
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req, res, next) => {
  // console.log(req.body);
  // console.log(req.query);
  console.log("모든 요청은 여기 들렸다가 진행된다.");
  next();
});

app.get("/setCoo", (req, res, next) => {
  console.log("test");
  res.cookie("herher", "haha", {
    expires: new Date(Date.now() + 1000 * 60),
    httpOnly: true,
    secure: true,
    signed: true,
  });
  res.send("여기요!!!");
});

app.get("/getCoo", (req, res, next) => {
  console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("저기요!!");
});

app.get(
  "/",
  async (req, res, next) => {
    const conn = await pool.getConnection();
    const result = await conn.execute("select * from users");
    next();

    res.status(200).json(result[0]);
  },
  (req, res, next) => {
    console.log("일로오나");
  }
);
app.post("/", async (req, res) => {
  const conn = await pool.getConnection();
  const result = await conn.execute(`insert into users 
                                     (id,password)
                                     values
                                     ('${req.body.name}','${req.body.age}')`); // sql 구문 실행
  conn.release();
  res.send(result);
});

app.put("/", async (req, res) => {
  console.log(req.body);
  const conn = await pool.getConnection();
  const sql = "update users set id=?, password=? where idx=?";

  const result = await conn.execute(sql, [
    req.body.id,
    req.body.password,
    req.body.idx,
  ]);
  conn.release();
  res.send(result);
});

app.delete("/", (req, res) => {
  throw new Error("강제에러 발생");
  res.send("hello delete");
});

app.get("/html", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("에러가발생하였습니다.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
