import React from 'react'
import { useState } from 'react';
const Tasks = () => {
    const [tasks, setTasks] = useState([]); // The history of all tasks
    const [newTask, setNewTask] = useState(""); // The current text being typed
    const handleSubmit=(e)=>{
        e.preventDefault();
        let newtask={
            id : Date.now() ,
            text : newTask  ,
            status : false ,
        }
        setTasks([...tasks , newtask]);
        setNewTask("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter task"
                />
                <button type="submit">Add Task</button>
            </form>
        </div>
    )
}

export default Tasks
