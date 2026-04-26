import React, { useState, useEffect } from 'react';

const Tasks = () => {
    const [tasks, setTasks] = useState(() => {
        const saveditems = localStorage.getItem('myTasks');
        if (saveditems) {
            return JSON.parse(saveditems);
        }
        else {
            return [];
        }
    })

    const [newTask, setNewTask] = useState(""); 

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
        <div className='dashboard-container'>
            <h2>Your Tasks</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Enter task..."
                    style={{ marginBottom: 0 }}
                />
                <button type="submit">Add Task</button>
            </form>
            <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        style={{ borderBottom: '1px solid var(--border-color)', padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <input type="checkbox" checked={task.status} onChange={() => { handleToggle(task.id) }} style={{ width: '20px', height: '20px' }} />
                            <span style={{ textDecoration: task.status ? 'line-through' : 'none', color: task.status ? 'var(--text-secondary)' : 'var(--text-primary)', fontSize: '1.1rem' }}>
                                {task.text}
                            </span>
                        </div>
                        <button onClick={() => { handleDelete(task.id) }} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '6px', cursor: 'pointer' }}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Tasks