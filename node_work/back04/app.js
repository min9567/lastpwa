const express = require("express"); // express 라이브러리(정해진 개발방법)
const path = require("path"); // 경로설정라이브러리
const nunjucks = require("nunjucks"); // html 보내는거 res.render('index')
const morgan = require("morgan"); // 로그
const cookieParser = require("cookie-parser"); //쿠키
const expressSession = require("express-session"); // 세션
const cors = require("cors"); // // 리액트랑 각종언어 통신
const multer = require("multer"); // 파일 업로드
const fs = require("fs"); // 폴더 만들기

// uploads 폴더 없으면 생서하는 로직
try {
  // uploads 폴더 읽어라 근데 없으면 에러(캐치)로 간다
  fs.readdirSync("uploads");
} catch (e) {
  console.error("uploads 폴더가 없어서 uploads폴더 생성합니다.");
  fs.mkdirSync("uploads");
}

// .env 로딩
require("dotenv").config();

// exppress 생성
const app = express();

/*미들웨어 장착 시작*/
// cors 에러 해결 교차 출저
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(morgan("dev"));
app.use(express.json(), express.urlencoded({ extended: false }));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  expressSession({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: false,
      secure: false,
    },
    name: "session-cookie",
  })
);

app.set("port", 4000);
app.set("view engine", "html");

nunjucks.configure("views", {
  express: app,
  watch: true,
});

const upload = multer({
  storage: multer.diskStorage({
    // 파일은 디스크에 저장 하겠다.
    destination(req, file, done) {
      done(null, "uploads/"); // 파일이 업로드 되면 uploads경로에 저장하겠다
    },
    // 파일을 저장할때 파일명은
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      console.log(ext);
      console.log(path.basename(file.originalname, ext) + Date.now() + ext);
      // 원래 파일명 + 현재시간 + 확장자로 설정하겠다.
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 100 * 1024 * 1024 },
});
/*미들웨어 장착 끝*/
