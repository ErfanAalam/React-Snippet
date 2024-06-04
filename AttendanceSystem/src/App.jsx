import { useEffect, useState } from 'react'
import './App.css'
import students from './students'
import axios from 'axios';

function App() {

  const faculty = ["Rohit Jain", "Somesh Sharma"];
  const [facultyNames, setFacultyNames] = useState(faculty);
  const [sortedStudents, setSortedStudents] = useState([]);


  const [attendance, setAttendance] = useState({});

  function handleFacultyChange(e) {
    const faculty = e.target.value;
    const studentNames = students.find((obj) => obj.faculty === faculty);
    setSortedStudents(studentNames.names.sort());


    const initialAttendance = {};
    studentNames.names.forEach((name, index) => {
      const uniqueKey = `${name}-${index}`;
      initialAttendance[uniqueKey] = false;
    });
    setAttendance(initialAttendance);

  }



  function handleAttandance(uniqueKey) {
    setAttendance(prev => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey]

    }));
  }

  function handleAllAttendance(toMark) {
    const students = Object.keys(attendance)
    const newAttendance = {}
    if (toMark) {
      students.forEach((student) => {
        newAttendance[student] = true
      })
    }
    else {
      students.forEach((student) => {
        newAttendance[student] = false
      })
    }
    setAttendance(newAttendance)
  }




  // useEffect(()=>{
  //   axios.get("https://attendance-api-sjkr.onrender.com/getFaculty")
  //   .then((response)=>{console.log(response.data)})
  // },[])
  
    // useEffect(()=>{
    //   axios.post("https://attendance-api-sjkr.onrender.com/saveFaculty",
    //   {name:"Shubh"}).then((response)=>console.log(response.data))
    // },[])

  useEffect(()=>{
    axios.get("https://attendance-api-sjkr.onrender.com/getStudent")
    .then((response)=>{console.log(response.data)})
  },[])

  //   useEffect(()=>{
  //   axios.post("https://attendance-api-sjkr.onrender.com/saveStudent",{name : "Divyansh Sahu", faculty:"Rohit Sir"})
  //   .then((response)=>{console.log(response.data)})
  // },[])


  // useEffect(()=>{
  //   axios.delete("https://attendance-api-sjkr.onrender.com/deleteStudent/1717414070063")
  //   .then((response)=>{console.log(response.data)})
  // },[])





  return (
    <>
      <div className="facultyChooser">
        <select name="faculty" id="" required onChange={handleFacultyChange}>
          <option value="" defaultValue="">
            Select Faculty
          </option>
          {facultyNames.map((name, index) => {
            return (
              <option key={index} value={name}>
                {name}
              </option>
            );
          })}
        </select>

        <button onClick={() => handleAllAttendance(true)}>All Present</button>
        <button onClick={() => handleAllAttendance(false)}>All Absent</button>
        <button><a href="saveStudent">Add Student</a></button>
        <button><a href="saveTeacher">Add Faculty</a></button>

      </div>

      <div className="attendanceGrid">
        {sortedStudents && sortedStudents.length > 0 ? (
          <>
            <div className='names'>
              {sortedStudents.map((student, index) => {
                const uniqueKey = `${student}-${index}`;
                return (
                  <div key={uniqueKey} className='name'>
                    <p className='para'>
                      <span>{student}</span>
                      <span className="marker" onClick={() => handleAttandance(uniqueKey)} >
                        {
                          attendance[uniqueKey] ? "P" : "A"
                        }
                      </span>
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          "Select faculty"
        )}
      </div>

    </>
  )
}

export default App


// const [faculty, setFaculty] = useState("")


{/* <div className="facultyname">
        <label htmlFor="faculty">Select Faculty name </label>
        <select name="faculty" id="faculty" onChange={(e) => setFaculty(e.target.value)}>
          <option value="">Select Faculty</option>
          <option value="somesh">Somesh Sharma</option>
          <option value="rohit">Rohit jain</option>
        </select>
      </div>

      <div className="students">
        <ol>
          {
            faculty == ""
              ?
              "Select Faculty name"
              :
              faculty == "somesh"
                ?
                students[0].names.sort().map((student, index) => {
                  return <li key={index}>{student}</li>
                })
                :
                students[1].names.sort().map((student, index) => {
                  return <li key={index}>{student}</li>
                })
          }
        </ol>
      </div> */}
