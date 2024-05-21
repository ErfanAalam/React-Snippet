import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';
// import CreateIcon from '@mui/icons-material/Create';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';



const ToDo = ({ tasks }) => {
   
    const handleDelete = () =>{

    }

    const handleUpdate = ()=>{

    }

    return (
        <div>
            <ul>
                {
                    tasks.map((task, index) => {
                        // return <li key={index}>{task} <DeleteIcon /> <CreateIcon /> </li>
                        return <li key={index}>
                            {task}
                            <FontAwesomeIcon icon={faPencil} onClick={() => handleUpdate()} />
                            <FontAwesomeIcon icon={faTrash} onClick={()=> handleDelete} />
                        </li>

                    })
                }
            </ul>
        </div>
    )
}

export default ToDo
