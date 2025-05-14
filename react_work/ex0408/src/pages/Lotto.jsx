import axios from "axios";
import React, { useEffect, useState } from "react";

function Lotto() {
  const [lottoNumbers, setLottoNumbers] = useState([1, 2, 3, 4]);
  const [drwNo, setDrwNo] = useState(1163);

  async function getLottoNumbers() {
    const result = await axios.get(
      `/api/common.do?method=getLottoNumber&drwNo=${drwNo}`
    );
    console.log(result.data);

    if(result.data.returnValue === 'success') {
    setLottoNumbers([
      result.data.drwtNo1,
      result.data.drwtNo2,
      result.data.drwtNo3,
      result.data.drwtNo4,
      result.data.drwtNo5,
      result.data.drwtNo6,
    ]);
} else {
    alert(`${drwNo}회차는 다음주 토요일에 발표합니다.`);
    setDrwNo(drwNo-1);
}
  }

  useEffect(() => {
    getLottoNumbers();
  }, [drwNo]);

  return (
    <>
      <div>
        <h2>Lotto {drwNo} 회차</h2>
      </div>
      <div>
        {lottoNumbers.map((num) => (
          <span key={num} className="lotto">
            {num}
          </span>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            setDrwNo((drwNo) => drwNo - 1);
          }}
        >
          ◁이전
        </button>
        <button
          onClick={() => {
            setDrwNo((drwNo) => drwNo + 1);
          }}
        >
          다음▷
        </button>
      </div>
    </>
  );
}

export default Lotto;
