import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const plus = () => {setCount(count + 1); sessionStorage.setItem('count', count + 1)};
  const minus = () => {setCount(count - 1); sessionStorage.setItem('count', count - 1)};
  const reset = () => {setCount(0); sessionStorage.setItem('count', 0)};

  const [inputvalue, setinputvalue] = useState('');
  const [age, setage] = useState(-1); 

  let newDate = new Date();

  function ageCalc(){
    setage(newDate.getFullYear())
  }

  return (
    <>
      <div>
        <h1> count = {count}</h1>
        <button onClick={plus}>증가</button>
        <button onClick={minus}>감소</button>
        <button onClick={reset}>리셋</button>
      </div>
      <div style={{margin : '20px'}}>
        <input type="text" name="" id="" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/>
        <button onClick={()=>{ageCalc()}}>계산하기</button>
        {/* <p>현재 25년 기준으로 만 {a}살입니다.</p> */}
        <p>{age>=0?'오늘일자 기준 만 나이는 '+ age + '살입니다.':'생년월일을 입력해주세요.'}</p>
      </div>
    </>
  );
}

export default App;
