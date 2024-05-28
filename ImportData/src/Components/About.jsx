import React from 'react'
import { useState, useEffect } from 'react';

const About = () => {

  const [data , setData] = useState("")

    const paragraphs = 20;
    useEffect(() => {
        fetch("https://api.api-ninjas.com/v1/loremipsum?paragraphs=" + paragraphs, {
          headers: { "X-Api-Key": "w12daq2QFBqimbES0nRBlA==QkWtM2rJZtUUSoOI" },
          contentType: "application/json",
        })
          .then((res) => res.json())
          .then((result) => setData(result.text))
          .catch((err) => console.log(err));
      }, []);
      return(<>
        <h1>About</h1>
        <div className="abouts">{data.split("\n").map((para,index)=>{
            return <p key ={index}>{para}</p>
        })}</div>
        
      </>)

      }
export default About
