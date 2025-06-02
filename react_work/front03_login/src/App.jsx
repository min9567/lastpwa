import './App.css'
import axios from "axios";
import {useState} from "react";

function App() {
    const [ state, setstate] = useState();

    const test = "test 입니다."
    const login = async () => {
        const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
                email: "aaa@naver.com",
                password: "1234"
            },
            {withCredentials: true});
        // console.log(res);
        setstate(res.data);
    }

    const logout = async () => {
        const res
            = await axios.get(`${import.meta.env.VITE_API_URL}/logout`, {withCredentials: true});
        // console.log(res)
        setstate(res.data);
    }

    const mypage = async () => {
        const res
            = await axios.get(`${import.meta.env.VITE_API_URL}/mypage`, {withCredentials: true});
        console.log(res)
        setstate(JSON.stringify(res.data));
    }



    return (
        <>
            <h1>{test}</h1>
            <h1>{state}</h1>
            <button onClick={login}>로그인</button>
            <button onClick={logout}>로그아웃</button>
            <button onClick={mypage}>마이페이지</button>
        </>
    )
}

export default App
