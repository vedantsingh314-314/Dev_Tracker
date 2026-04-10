import React from 'react'

const Sidebar = ({changeView}) => {
  return (
    <div style={{ border: '1px solid red', padding: '10px' }}>
      this  is Sidebar
      <button onClick={()=> changeView('dashboard')}>Dashboard</button>
      <button onClick={() => changeView('tasks')}>Tasks</button>
    </div>
  )
}

export default Sidebar
