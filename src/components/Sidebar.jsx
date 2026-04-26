import React from 'react'

const Sidebar = ({ changeView, currentView }) => {
  return (
    <div className="sidebar">
      <button 
        className={currentView === 'dashboard' ? 'active' : ''} 
        onClick={() => changeView('dashboard')}
      >
        📊 Dashboard
      </button>
      <button 
        className={currentView === 'tasks' ? 'active' : ''} 
        onClick={() => changeView('tasks')}
      >
        ✅ Tasks
      </button>
    </div>
  )
}

export default Sidebar