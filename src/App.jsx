import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './css/mobile/App.css'

import Header from './components/pages/Header.jsx'
import Home from './components/pages/Home.jsx'
import About from './components/pages/About.jsx'
import Projects from './components/pages/Projects.jsx'
import Qual from './components/pages/Qual.jsx'
import Contact from './components/pages/Contact.jsx'


function App() {
  const [count, setCount] = useState(0)
  const[dark, setDark] = useState(true);

  function toggleDark() {
    setDark(prev => !prev)
  }
  const light = {
    backgroundColor: dark ? '#0a111e': '#EDF2F8',
  }
  return (
    <div className="App">
      {/* <BrowserRouter >
      <Header mode={dark} toggler={toggleDark}/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/' element={<About />}/>
          <Route path='/' element={<Projects />}/>
          <Route path='/' element={<Qual />}/>
          <Route path='/' element={<Contact />}/>
        </Routes>
      </BrowserRouter> */}
      <Header mode={dark} toggler={toggleDark}/>
      <Home />
      <About />
      <Projects />
      <Qual />
      <Contact />

      
    </div>
  )
}

export default App
