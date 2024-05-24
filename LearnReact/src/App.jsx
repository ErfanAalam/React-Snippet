import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircle, faPencil, faTrash} from '@fortawesome/free-solid-svg-icons';

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
     <div className="container">
     <input type="text" className='input' placeholder='Enter your task to add' value={task} onChange={(e) => setTask(e.target.value)} />
      <button className='btn' onClick={handlesubmit}>Add</button>
      <ul className='ul'>
        {
          tasks.map((task, index) => {
            return <li key={index} className={task.completed? "check li": "li"}>
              {task.task}
              {
                task.completed? "" :<FontAwesomeIcon icon={faPencil} onClick={() => handleUpdate(task.id)} />
              }
              <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(task.id)} />
              <FontAwesomeIcon icon={task.completed ? faCheckCircle : faCircle} onClick={() => handleCheck(task.id)} />
            </li>
          })
        }
      </ul>
     </div>
    </>
  )
}

export default App




