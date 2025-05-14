import { useState } from 'react'
import './App.css'
import BB from './BB'

function CC() {
  return (
    <div><h1>CCCC</h1></div>
  )
}

function App() {
  const [aa, setAA] = useState('useStateAA')
  const doClick = () => setAA(aa + "!!");

  const test = "ㅎㅇ test야"

  return (
    <>
      <CC className=""></CC>
      <BB></BB>
      <h2 className='title
      '>{test}</h2>
      <h1 id='aa'>ㅎㅇ{aa}</h1>
      <button onClick={doClick}>버튼</button>
    </>
  )
}

export default App
