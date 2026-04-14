import React from 'react'
import { useState, useEffect } from 'react';


const Tasks = () => {
    const [tasks, setTasks] = useState(() => {
        const saveditems = localStorage.getItem('myTasks');
        if (saveditems) {
            return JSON.parse(saveditems);
        }
        else {
            return [];
        }
    })// THIS IS TASKS ARRAY LAZY INSTALLATION 

    const [newTask, setNewTask] = useState(""); // The current text being typed
    useEffect(() => {
        localStorage.setItem('myTasks', JSON.stringify(tasks));
    }, [tasks]);



    const handleSubmit = (e) => {
        e.preventDefault();
        let newtask = {
            id: Date.now(),
            text: newTask,
            status: false,
        }
        setTasks([...tasks, newtask]);
        setNewTask("");
    };
    const handleDelete = (id) => {
        setTasks(
            tasks.filter((task) => task.id !== id)
        )
    };
    const handleToggle = (id) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, status: !task.status };
                } else {
                    return task;
                }
            })
        );
    };
    return (
        <div className='app-container'>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter task"
                />
                <button type="submit">Add Task</button>
            </form>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{ border: '1px solid gray', padding: '10px', margin: '5px 0', display: 'flex', justifyContent: 'space-between' }}
                    >
                        <input type="checkbox" checked={task.status} onChange={() => { handleToggle(task.id) }} />
                        <span style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
                            {task.text}
                        </span>
                        <button onClick={() => { handleDelete(task.id) }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks
