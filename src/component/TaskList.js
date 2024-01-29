import { useState } from "react";
import TaskCard from "./TaskCard";
//import BoxCard from "./BoxCard"
import React from "react";



 const TaskList = ({concept}) => {
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed: true}, 
        {id: 7825, name: "Edit React Lectures", completed: false}, 
        {id: 8391, name: "Watch Lectures", completed: false}
    ]);
    const [show, setShow] = useState(true);

    function handleDelete(id){
        setTasks(tasks.filter(task => task.id !== id));
    }

  return (
    <>
        <h1>Task List</h1>
        <ul>
            <button className='trigger' onClick={() => setShow(!show)}>Toggle</button>
            { show && tasks.map((task) => (
                <TaskCard key={task.id} concept={concept} task={task} handleDelete={handleDelete} />
            )) }
        </ul>
       
    </>
  )
}

export default TaskCard

