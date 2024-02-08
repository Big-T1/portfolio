import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './component/Home';
import Contacts from './component/Contacts';
import Projects from './component/Project';

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/projects" element={<Projects />} />
      
      
      </Routes>
      </BrowserRouter>
    
      
    </>
  )
}

export default App
