import React, {useState} from 'react';
import EditTask from './EditModalTask'

const TaskCard = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModal] = useState(false);

    const toggle = () => {setModal(!modal);}

    const updateTask = (obj) => {updateListArray(obj, index) }

    const handleDelete = () => {deleteTask(index)}
    
    return (
        <div className = "card-wrapper mr-5">
            <div className = "card-top" style={{"backgroundColor": "hsl(" + Math.random() * 360 + ", 100%, 75%)"}}></div>
            <div className = "task-holder">
            
                <span className = "card-header" style={{"backgroundColor": "hsl(" + Math.random() * 360 + ", 100%, 75%)", "borderRadius": "10px"}}>TaskName: {taskObj.Name}</span>
                <p className = "mt-3 card-paragraph"style={{"backgroundColor": "hsl(" + Math.random() * 360 + ", 100%, 75%)", "borderRadius": "6px"}}>Description: {taskObj.Description}</p>
               <span className = "card-header" style={{"backgroundColor": "hsl(" + Math.random() * 360 + ", 100%, 75%)", "borderRadius": "10px"}}>Starting Date: {taskObj.StartDate}</span>
               <span className = "card-header" style={{"backgroundColor": "hsl(" + Math.random() * 360 + ", 100%, 75%)" ,"borderRadius": "10px"}}>Completion Date: {taskObj.EndDate}</span>
                <div style={{"position": "absolute", "right" : "20px", "bottom" : "20px"}}>
                    <i className = "fas fa-edit mr-3" style={{"cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                    <i className="fas fa-trash" style = {{ "cursor" : "pointer"}} onClick = {handleDelete}></i>
                </div>
        </div>
        <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj}/>
        </div>
    )
}

export default TaskCard
