import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Pomodoro from './components/pomodoro'
import './App.css'
import { useState } from 'react'


function App() {
  const [veiw,setveiw]=useState('tasks');
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar changeView={setveiw} />
        <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
          <MainContent currentview={veiw} />
        <Pomodoro />
    </div>
      </div>
    </>
  )
}

export default App
