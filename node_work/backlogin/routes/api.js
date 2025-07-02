const express = require('express');
const router = express.Router();
const supabase = require('../database/db.js')
const bcrypt = require("bcrypt");

const client_id = process.env.KAKAO_CLIENT_ID;
const redirect_url = process.env.KAKAO_REDIRECT_URL;
const client_secret = process.env.KAKAO_CLIENT_SECRET;

router.post('/login', async (req, res) => {
    const {id, password} = req.body;
    const sendData = {};

    const {data, error} = await supabase.from('member').select()
        .eq('id', id);

    if (data.length > 0) {
        // admin 라는 계정이 있으면
        // 비밀번호 같은지 확인 bcrypt 암호화 임으로 compare 함수로 비교

        console.log('password', password);
        console.log('data[0].pw', data[0].pw)
        console.log('비교암호', bcrypt.compare(password.trim(), data[0].pw))

        if (await bcrypt.compare(password.trim(), data[0].pw)) {
            //비밀번호 같으면
            sendData.flag = "success";
            sendData.message = "로그인 성공";
            req.session.user = {id: data[0].id, addr: data[0].addr}
            res.json(sendData);
        } else {
            // 비밀번호 틀리면
            sendData.flag = "error";
            sendData.message = "비밀번호가 틀렸습니다.";
            res.status(401).json(sendData);
        }
    } else {
        // admin 라는 계정이 없으면
        sendData.flag = "fail";
        sendData.message = "아이디와 비밀번호를 확인하세요.";
        res.status(401).json(sendData);
    }

})

router.get('/me', async (req, res, next) => {
    console.log(req.session.user);
    console.log('카카오 로그인 체크');
    if(req.session.user){
        res.json({status: true, user: req.session.user});
    } else {
        res.json({status: false});
    }
})

router.post('/logout', async (req, res) => {
    req.session.destroy(
        ()=> {
            res.clearCookie('connect.sid');
            res.json({status: false})
        }
    );
})

// 인가코드
router.get('/kakaologin', async (req, res) => {
    res.redirect(`https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_url}&response_type=code`);
})

module.exports = router;