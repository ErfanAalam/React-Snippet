import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCross, faPencil, faTrash, faX } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [task, setTask] = useState("")
  const [tasks, setTasks] = useState([])
  const [isEditing, setIsEditing] = useState(false);

  const handlesubmit = () => {
    if (isEditing === false) {
      let obj = {
        id: Date.now(),
        task: task,
        completed:false
      }
      setTasks([...tasks, obj])
    } else {
      const taskToEdit = tasks.find((obj) => obj.id === isEditing);
      console.log(taskToEdit);
      taskToEdit.task = task;
      setTasks(tasks);
      setIsEditing(false);
    }
    setTask("")

  }

  const handleUpdate = (id) => {
    console.log(id);
    setIsEditing(id);
    setTask(tasks.find((obj) => obj.id === id).task);
  }

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const handleCheck = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true }; 
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <input type="text" placeholder='Enter your task to add' value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handlesubmit}>Add</button>
      <ul>
        {
          tasks.map((task, index) => {
            return <li key={index}>
              {task.task}
              <FontAwesomeIcon icon={faPencil} onClick={() => handleUpdate(task.id)} />
              <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(task.id)} />
              <FontAwesomeIcon icon={task.completed ? faCheck : faX} onClick={() => handleCheck(task.id)} />
            </li>
          })
        }
      </ul>
    </>
  )
}

export default App




