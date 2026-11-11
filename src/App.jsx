
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'

import Home from './Pages/Home'
import About from './Pages/About'
import Software from './Pages/Software'
import Cloud from './Pages/Cloud'
import ProcessDesign from './Pages/Process Design'
import Contact from './Pages/Contact'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <main className="portfolio">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/software" element={<Software />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/process-design" element={<ProcessDesign />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </main>
    </BrowserRouter>
  )
}

export default App
