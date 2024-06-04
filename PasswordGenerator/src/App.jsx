import { useState } from 'react'
import './App.css'

function App() {

  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [uppercase, setUppercase] = useState(false)
  const [lowercase, setLowercase] = useState(false)
  const [symbol, setSymbol] = useState(false)
  const [number, setNumber] = useState(false)

  console.log(typeof (length));

  function generatepassword() {
    let charset = ''
    let newpassword = ""

    if (uppercase) {
      charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (lowercase) {
      charset += "abcdefghijklmnopqrstuvwxyz"
    }
    if (symbol) {
      charset += "!@#$%^&*"
    }
    if (number) {
      charset += "1234567890"
    }

    if (length >= 8) {
      for (let i = 0; i < length; i++) {
        newpassword += charset.charAt(Math.floor(Math.random() * charset.length))
      }
    } else {
      alert("Password length must be greater than or equal to 8")
    }
    setPassword(newpassword)
  }


  return (
    <>
      <h1>Password Generator</h1>
      <input type="text" className='output' value={password} readOnly />
      <div className="length">
        <label htmlFor="length">Select Your password length between 8 to 50 characters <b>By default character length is 8</b></label>
        <input type="text" className='inputlength' onChange={(e) => setLength(e.target.value)} />
      </div>
      <div className="charset">

        <div className="uppercase">
          <input type="checkbox" name="uppercase" id="uppercase" onChange={() =>{ setUppercase(!uppercase),setPassword("")}} />
          <label htmlFor="uppercase">Include Uppercase</label>
        </div>

        <div className="lowercase">
          <input type="checkbox" name="lowercase" id="lowercase" onChange={() => {setLowercase(!lowercase),setPassword("")}} />
          <label htmlFor="lowercase">Include lowercase</label>
        </div>

        <div className="Symbols">
          <input type="checkbox" name="Symbols" id="Symbols" onChange={() => {setSymbol(!symbol),setPassword("")}} />
          <label htmlFor="Symbols">Include Symbols</label>
        </div>

        <div className="Numbers">
          <input type="checkbox" name="Numbers" id="Numbers" onChange={() => {setNumber(!number),setPassword("")}} />
          <label htmlFor="Numbers">Include Numbers</label>
        </div>

      </div>
      <div className="button">
        <button className='btn' onClick={generatepassword}>Generate password</button>
      </div>
    </>
  )
}

export default App
