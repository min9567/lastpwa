import { useEffect, useState } from 'react'
import './App.css'
import { createClient } from '@supabase/supabase-js';

// useState useEffect useReg useMemo useCallback
// useState 값이 변경될시에 화면이 재랜더링

const url = "https://zgrjjnifqoactpuqolao.supabase.co";
const pwd = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpncmpqbmlmcW9hY3RwdXFvbGFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyNDc0NTgsImV4cCI6MjA1NjgyMzQ1OH0._Vl-6CRKdMjeDRyNoxlfect7sgusZ7L0N5OYu0a5hT0";
const supabase = createClient(url, pwd);

function App() {
  const [count, setCount] = useState(0);
  const [pages, setPages] = useState([1, 2, 3, 4, 5]);

  const [data, setData] = useState([
    { review_num: 1, user_id: "eeff51f0-6e6a-44e1-adf4-9edffffe1de8", name: "홍길동", title: "제목1", review_txt: "리뷰야1" },
    { review_num: 2, user_id: "eeff51f0-6e6a-44e1-adf4-9edffffe1de8", name: "박길동", title: "제목2", review_txt: "리뷰야2" },
    { review_num: 3, user_id: "eeff51f0-6e6a-44e1-adf4-9edffffe1de8", name: "이길동", title: "제목3", review_txt: "리뷰야3" }
  ]);

  // 처음에 한번만 콜백함수 호출해라?
  useEffect(() => {

    const fetchData = async () => {
    // 총 페이지 개수 구하기
    const total = (await supabase.from('review').select()).data.length;
    let totalpage = Math.ceil(total / 5);

    const temp = [];
    for (let i = 0; i < totalpage; i++) {
      temp.push(i + 1);
    }

    setPages(temp);

    // const temp = Array.from({length: totalpage}, (_, i) => i + 1);
    // console.log(`temp = `);
    // console.log(temp);

    const params = new URLSearchParams(location.search);
    const pageNum = params.get('pageNum') ?? "1";

    const [from, to] = [(parseInt(pageNum) - 1) * 5, parseInt(pageNum) * 5 - 1]



    const res = await supabase.from('review').select().range(from, to);
    setData(res.data);
  }
  fetchData();
  }, []);

  console.log("호출되냐")

  // const retData = data.map(item => {
  //   return `<li></li>`;
  // })
  // console.log(retData);

  const getReview = async () => {
    const res = await supabase.from('review').select();
    setData(res.data);
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {
          pages.map((item) => (
            <a key={item} href={`?pageNum=${item}`}>{item}</a>
          ))
        }

      </div>
      <h1>count = {count}</h1>
      <button onClick={() => { setCount(count + 1) }}>count 증가ㅏㅏㅏ</button>
      <button onClick={getReview}>count 가져와ㅏㅏㅏ</button>
      {
        data.map(item => (
          <div key={item.review_num}>
            <div><h1>게시글 {item.title}</h1></div>
            <div>{item.review_txt}</div>
            <div>작성자{item.name}</div>
          </div>
        ))
      }

    </>
  )
}

export default App
