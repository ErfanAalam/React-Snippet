import axios from 'axios';
import './App.css'
import { useEffect, useState } from 'react';

function App() {

  const API_KEY = "77caa9053bmsh55a682554378651p155fddjsn6e6bcbddd470"

  const [languages, setLanguages] = useState([])

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
        // })
      } catch (error) {
        console.error(error);
      }
    })()

  }, [])

  console.log(languages);

  return (
    <>
      <select name="languages" id="">
        <option value="">Select language</option>
        {
          languages.map((lang) => {
            <option value={lang.name}>{lang.name}</option>
          })
        }
      </select>
    </>
  )
}

export default App
