import { useEffect, useRef, useState } from 'react';
import './App.css';
import Calcu from './components/Calcu';



function App() {
  const aa = 'aabcd';
  let a = 10;
  const useA = useRef(10);

  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  useEffect(() => {
    console.log('useEffect 호출');
    handleClick();
    // inputRef.current.focus();
  });

  return (
    <>
      <Calcu></Calcu>
      <h1>count = {count}</h1>
      <h1>a = {a}</h1>
      <h1>useA = {useA.current}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        카운트증가
      </button>
      <button
        onClick={() => {
          a = a + 1;
          useA.current = useA.current + 1;
        }}
      >
        a증가 useA증가
      </button>
      <input type="text" name="" id="" ref={inputRef} />
      <button onClick={handleClick}>포커스이동</button>
    </>
  );
}

export default App;
