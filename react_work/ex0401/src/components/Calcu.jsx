import React, { useMemo, useState } from 'react';
import Header from '@/layout/Header';

function calcu() {
  const [hardNum, setHardNum] = useState(1);
  const [easyNum, setEasyNum] = useState(1);
  const easyCalcu = (num) => {
    return num+100;
  };

  const hardCalcu = (num) => {
    console.time('hard');
    for (let index = 0; index < 1_000_000_000; index++) {
      num += index;
    }
    console.log('오래걸림');
    console.timeEnd('hard');
    return hardNum;
  };

  // useState useEffect useRef useMemo
  // react 사용하면서 성능개선하려면 뭘 해봤냐..????
  // useMemo 설명? useCallback설명??

  // 성능개선 useMemo useCallback Memo 3개
  // uesmemo 변수 hardNum이라는게 변경되면 자동호출
  // useCallback 함수 어떤게 변경되면 호출
  // Memo 컴포넌트가 변경되면 호출.
  const hardSum = useMemo(() => {
    return hardCalcu(hardNum);
  }, [hardNum]);

  return (
    <div>
      <Header></Header>
      <h1>Calcu</h1>
      <div style={{ border: '1px solid black' }}>
        <p>hardCalcu = {hardSum}</p>
        <button onClick={() => setHardNum(hardNum + 10)}>어려운숫자증가</button>
      </div>
      <div style={{border: '1px solid black'}}>
        <p>hardCalcu = {easyCalcu(easyNum)}</p>
        <button onClick={() => setEasyNum(easyNum + 10)}>쉬운숫자증가</button>
      </div>
    </div>
  );
}

export default calcu;
