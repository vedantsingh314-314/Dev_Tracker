import { useState } from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import Pomodoro from './components/Pomodoro'
import './App.css'

function App() {
  const [view, setView] = useState('dashboard');
  
  return (
    <div className="app-wrapper">
      <Navbar />
      <div className="layout">
        <Sidebar changeView={setView} currentView={view} />
        <div className="main-scroll-area">
          <MainContent currentview={view} />
          <Pomodoro />
        </div>
      </div>
    </div>
  )
}

export default App