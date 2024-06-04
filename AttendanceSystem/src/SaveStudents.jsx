import React, { useState } from 'react'
import axios from 'axios'

const SaveStudents = () => {

    const [studentName, setStudentName] = useState("")
    const [facultyName, setFacultyName] = useState("")

   


    const handleSubmit = (e) => {
        e.preventDefault()
        // alert("form submitted")
        let info = {
            name : studentName,
            faculty : facultyName
        }

        axios.post("https://attendance-api-sjkr.onrender.com/saveStudent",  info )
        .then((response) => { console.log(response.data) })


        // console.log(studentName);

        axios.get("https://attendance-api-sjkr.onrender.com/getStudent")
            .then((response) => { console.log(response.data) })
    }


    return (
        <div>
            <form action="submit" onSubmit={(e) => handleSubmit(e)}>
                <div className="stname">
                    <label htmlFor="StName">Enter Student Name</label>
                    <input type="text" name="studentName" id="StName" placeholder='Enter the name of student' onChange={(e) => setStudentName(e.target.value)} />
                </div>

                <div className="faname">
                    <label htmlFor="StName">Enter Faculty Name</label>
                    <input type="text" name="facultyName" id="FaName" placeholder='Enter the name of Faculty' onChange={(e) => setFacultyName(e.target.value)} />
                </div>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default SaveStudents
