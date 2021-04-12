import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTask from './ModalCreateTask';
import TaskCard from './TaskCard';
 function Home() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);
    const toggle = () => setModal(!modal);

    const saveTasks =(taskObj)=>{
        let dupList= taskList
        dupList.push(taskObj)
        localStorage.setItem("taskList",JSON.stringify(dupList))
        setModal(false)
        setTaskList(dupList)
        window.location.reload()
    }
    const deleteTask= (index)=>{
        let dupList=taskList;
        dupList.splice(index,1)
        localStorage.setItem("taskList", JSON.stringify(dupList))
        setTaskList(dupList)
        window.location.reload()
        
    }
    const updateListArray =(obj,index)=>{
        let tempList =taskList
        tempList[index]=obj
        localStorage.setItem("taskList",JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
    useEffect(() => {
        let arr =localStorage.getItem("taskList")
        if(arr){
            let obj =JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])
    return (
        <>
        <div className=" header text-center mr-3">
            <h3 className="">Create Your Todo List</h3>
            <button className="btn btn-primary mt-5" onClick={()=> setModal(true)}>Create Now <i class="fas fa-plus-circle"></i></button>
        </div>
        <div className="task-container">
            {taskList.map((obj,index,key={index} )=><TaskCard key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>)}
        </div>
        <CreateTask modal={modal} toggle={toggle} save={saveTasks}/>
        </>
    )
}

export default Home;
