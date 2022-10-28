import React, { useState } from 'react'
import './App.css'
import Header from './components/pages/Header.jsx'
import Home from './components/pages/Home.jsx'
function App() {
  const [count, setCount] = useState(0)
  const[dark, setDark] = useState(true);

  function toggleDark() {
    setDark(prev => !prev)
  }
  const light = {
    backgroundColor: dark ? '#282c33': '#EDF2F8',
  }
  return (
    <div className="App">
      <Header mode={dark} toggler={toggleDark}/>
      <Home />

    </div>
  )
}

export default App
