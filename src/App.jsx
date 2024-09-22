
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Plane from './components/Plane'
import Projects from './components/Projects'
import Foter from './components/Foter'
import React, { useEffect, useRef } from 'react';

function App() {
  return (
    <div data-scroll data-scroll-speed="-0.6" className='w-full min-h-screen bg-zinc-900 text-sky-500'>
    <Plane/>
    <Navbar/>
    <LandingPage/>
    <Marquee/>
    <About/>
    
    <Projects/>
    <Foter/>
    </div>
  )
}

export default App