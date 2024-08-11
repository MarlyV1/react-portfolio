import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import About from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}/>
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      


    </BrowserRouter>
  )
}

export default App
