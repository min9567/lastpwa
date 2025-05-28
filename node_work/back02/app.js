require("dotenv").config();

const cors = require("cors");

const pool = require("./db");
const express = require("express");
const path = require("path");
const morgan = require("morgan");

const cookieParser = require("cookie-parser");

const app = express();

app.use(morgan());
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use((req, res, next) => {
  console.log("모든 요청은 여기 들렸다가 진행된다.");
  next();
});