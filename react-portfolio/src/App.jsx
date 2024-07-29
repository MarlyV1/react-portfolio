import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/AboutMe';
import Portfolio from './components/Portfolio';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=''/>
      </Routes>
      <Navigation />
      <Header />
      <About />
      <Portfolio />
      
      
    </BrowserRouter>
  )
}

export default App
