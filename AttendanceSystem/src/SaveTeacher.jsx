import React from 'react'
import { useState } from 'react'
import axios from 'axios'


const SaveTeacher = () => {

  const [facultyName, setFacultyName] = useState("")

  const handleSubmit = (e)=>{
    
    e.preventDefault()

    alert("form submitted")

      axios.post("https://attendance-api-sjkr.onrender.com/saveFaculty",
      {name:facultyName}).then((response)=>console.log(response.data))

    axios.get("https://attendance-api-sjkr.onrender.com/getFaculty")
    .then((response)=>{console.log(response.data)})

  }

  return (
    <div>
      <form action="submit" onSubmit={(e) => handleSubmit(e)}>
        <div className="faname">
          <label htmlFor="StName">Enter Faculty Name</label>
          <input type="text" name="facultyName" id="FaName" placeholder='Enter the name of Faculty' onChange={(e) => setFacultyName(e.target.value)} />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default SaveTeacher
