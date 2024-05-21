import { useState } from 'react'
import './App.css'
import ToDo from './Components/ToDo'

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])


  const handlesubmit = () => {
    setTasks([...tasks, task])
    setTask("")
  }


  return (
    <>
      <input type="text" placeholder='Enter your task to add' value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handlesubmit}>Add</button>
      <ToDo tasks={tasks} />
    </>
  )
}

export default App
