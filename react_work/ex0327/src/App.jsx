import { useEffect, useState } from 'react'
import './App.css'
import AA from './components/AA';
import BB from './components/BB';

// App컴포넌트
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('홍길동');

useEffect(() => {
  setCount(localStorage.getItem('count'));
  // console.log("UseEffect 호출");
}, []);

  const addCount = () => { setCount(count + 1); localStorage.setItem('count', count + 1) };
  const subCount = () => { setCount(count - 1); localStorage.setItem('count', count - 1) };
  const changName = () => { setName(name + '!')};

  return (
    <>
      <BB addCount={addCount} subCount={subCount}></BB>
      <AA aa="10" bb={20}></AA>
      <h1>name = {name}</h1>
      <button onClick={changName}>이름 변경</button>
      <h1>count = {count}</h1>
      <button onClick={addCount}>count up!!</button>
      <button onClick={subCount}>count down!!</button>
    </>
  )
}

export default App
