import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const API_KEY = "fe35977544msh0cef5652cddd32ap163190jsn1022d13469e7"

  const [languages, setLanguages] = useState([])


  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")

  const [text, setText] = useState("")

  const [result, setResult] = useState("")

  function handleFrom(e) {
    setFrom(e.target.value)
  }

  function handleTo(e) {
    setTo(e.target.value)
    console.log(e.target.value);
  }



  useEffect(() => {
    const options = {
      method: 'GET',
      url: 'https://text-translator2.p.rapidapi.com/getLanguages',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': 'text-translator2.p.rapidapi.com'
      }
    };

    (async () => {
      try {
        const response = await axios.request(options);
        setLanguages(response.data.data.languages)
      } catch (error) {
        console.error(error);
      }
    })()
  }, [])

  async function handleTranslate() {
    const url = 'https://text-translator2.p.rapidapi.com/translate';
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': 'fe35977544msh0cef5652cddd32ap163190jsn1022d13469e7',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        source_language: from,
        target_language: to,
        text: text
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log(result.data.translatedText);
      setResult(result.data.translatedText)
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <>
      <h1>Translator</h1>
      <div className="main">
        <div className="upper">
          <div className="from">
            <label htmlFor="from">FROM</label>
            <select name="languages" id="from" onChange={(e) => handleFrom(e)}>
              <option value="">Select language</option>
              {
                languages.map((lang, index) => {
                  return <option key={index} value={lang.code}>{lang.name}</option>
                })
              }
            </select>
          </div>

          <div className="to">
            <label htmlFor="to">TO</label>
            <select name="languages" id="to" onChange={(e) => handleTo(e)}>
              <option value="">Select language</option>
              {
                languages.map((lang, index) => {
                  return <option key={index} value={lang.code}>{lang.name}</option>
                })
              }
            </select>
          </div>
        </div>
        <br />

        <div className="result" >
          <div className="input">
            <label htmlFor="">Enter input Here</label>
            <textarea name="" placeholder='Enter your text to convert' value={text} id="" onChange={(e) => setText(e.target.value)} ></textarea>
          </div>

          <div className="output">
            <label htmlFor="">Got Output Here</label>
            <textarea name="" readOnly id="" value={result}></textarea>
          </div>
        </div>

        <button onClick={handleTranslate}>Translate</button>
      </div>
    </>
  )
}

export default App
