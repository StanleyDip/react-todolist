import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ModalCreateTask = ({modal,toggle,save}) => {
    const [selectedStartDate,setSelectedStartDate]=useState(new Date())
    const [selectedEndDate,setSelectedEndDate]=useState(new Date())
    const [taskName,setTaskName]=useState("");
    const [description,setDescription]=useState("");
    const handleChange=(e) =>{
        const {name,value}=e.target
        if(name==="taskName") {
          setTaskName(value)
        }
       
        else {
          setDescription(value)
    }
  }
    const handleSave =(e)=>{
      e.preventDefault()
      let taskObj={}
      taskObj["Name"]=taskName
      taskObj["Description"]=description
      taskObj["StartDate"]=selectedStartDate.getDate() + '/0' + (selectedStartDate.getMonth() + 1) + '/' + selectedStartDate.getFullYear()
      taskObj["EndDate"]= selectedEndDate.getDate() + '/0' + (selectedEndDate.getMonth() + 1) + '/' + selectedEndDate.getFullYear()
      save(taskObj)
    }
  //  const handleDate =(e)=>{

  //  }
  return (
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
          <Button color="primary" onClick={handleSave}>Create</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    
  );
}

export default ModalCreateTask;
// date => setSelectedDate(date.formattedValue)
// selectedEndDate.getDate() + '/0' + (selectedEndDate.getMonth() + 1) + '/' + selectedEndDate.getFullYear()