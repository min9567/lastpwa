const express = require("express");
const supabase = require("../config/supa.js");

router = express.Router();

router.route("")
.get(async (req, res, next) => {
  const { data, error } = await supabase.from("ice_res").select("*");

  return res.render("gisa", { data });
})
.post(async (req, res, next) => {
  console.log(req.body);
  return res.send("저장완ㅋ");
});

module.exports = router;
