import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'
import './App.css'
import { useState } from 'react'


function App() {
  const [veiw,setveiw]=useState('tasks');
  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar changeView={setveiw} />
        <MainContent currentview={veiw} />
      </div>
    </>
  )
}

export default App
