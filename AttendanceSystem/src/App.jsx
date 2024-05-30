import { useState } from 'react'
import './App.css'
import students from './students'

function App() {

  const faculty = ["Rohit Jain", "Somesh Sharma"];
  const [facultyNames, setFacultyNames] = useState(faculty);
  const [sortedStudents, setSortedStudents] = useState([]);

  const [button,setButton] = useState()

  const [attendance, setAttendance] = useState({});
  const [all, setAll] = useState()

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


  const handleAttandance = (uniqueKey) => {
    setAll(false)
    setAttendance(prev => ({
      ...prev,
      [uniqueKey]: !prev[uniqueKey]

    }));
  }

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

        <button onClick={() => {setAll(true),setButton(true)}}>All Present</button>
        <button onClick={() => {setAll(true), setButton(false)} }>All Absent</button>
          
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
                      <span onClick={() => handleAttandance(uniqueKey)}>{student}</span>
                      <span className="marker">
                        {all
                          ?
                          button ? "P" : "A"
                          :
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
