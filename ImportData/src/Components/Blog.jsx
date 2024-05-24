import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '/src/App.css'

const Blog = () => {
  const url = "https://jsonplaceholder.typicode.com/posts"

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(url)
      .then(response => {
        console.log(response.data)
        setData(response.data)
      })
  }, [])

  return (
    <>
      <h1 className='blogheading'>Blog app</h1>
      <div className="blogapp">
        {
          data.map((d, index) => {
            return (
              <>
                <div className='blogContainer' key={index}>
                  <h3>{d.id}</h3>
                  <h4>{d.title}</h4>
                  <p>{d.body}</p>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Blog
