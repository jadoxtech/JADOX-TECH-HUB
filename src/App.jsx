import { useState } from 'react'
import './index.css'
import  Navigation from './Pages/Navigation'
import Jadox from './Pages/Jadox'
import Services from './Pages/Service'
import Project from './Pages/Project'
import Footer from './Pages/Footer'
import AboutUs from './Pages/About'
function App() {
  
  return (
    <main>
      <Navigation/>
      <Jadox/>
     <Services/>
     <AboutUs/>
     <Project/>
     <Footer/>
    </main>
  )
}

export default App
