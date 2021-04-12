import React, { useState,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditModalTask = ({modal,toggle,updateTask,taskObj}) => {
    const [taskName,setTaskName]=useState("");
    const [description,setDescription]=useState("");
    const [selectedStartDate,setSelectedStartDate]=useState(new Date())
    const [selectedEndDate,setSelectedEndDate]=useState(new Date())
    const handleChange=(e) =>{
        const {name,value}=e.target
        if(name==="taskName"){
          setTaskName(value)
        }
        else{
          setDescription(value)
        } 
    }
    const handleUpdate =(e)=>{
        e.preventDefault()
        let tempObj={}
        tempObj['Name']=taskName
        tempObj['Description']=description
        tempObj["StartDate"]=selectedStartDate.getDate() + '/0' + (selectedStartDate.getMonth() + 1) + '/' + selectedStartDate.getFullYear()
        tempObj["EndDate"]= selectedEndDate.getDate() + '/0' + (selectedEndDate.getMonth() + 1) + '/' + selectedEndDate.getFullYear()
        updateTask(tempObj)
    }
    useEffect(() => {
    // this is use to grab the previous values
       setTaskName(taskObj.Name)
       setDescription(taskObj.Description)
       setSelectedStartDate()
       setSelectedEndDate()
   }, [])
  return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
        <form>
            <div className="form-group">
              <label>Task Name</label>
              <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName"/>
            </div>
            <label>Select Starting Date: </label>
           <DatePicker selected={selectedStartDate}  onChange={date => setSelectedStartDate(date)} 
           dateFormat='dd/MM/yyyy'
           minDate={new Date()}
             isClearable/>
             <label>Select Completion Date: </label>
           <DatePicker selected={selectedEndDate}  onChange={date => setSelectedEndDate(date)} 
           dateFormat='dd/MM/yyyy'
           minDate={new Date()}
             isClearable/>
            <div className="form-group">
              <label>Task Description</label>
                <textarea row="5"  className="form-control"value={description} onChange={handleChange} name="description"></textarea>
            </div>  
        </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    
  );
}

export default EditModalTask;