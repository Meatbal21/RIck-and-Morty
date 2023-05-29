import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About/About'
import Episodes from './pages/Episodes/Episodes'
import CharacterDetails from './pages/CharachterDetails/CharacterDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/details/:characterId' element={<CharacterDetails />} />
        <Route path='/episodes' element={<Episodes />} />

      </Routes>
      

      <Footer />
    </BrowserRouter>
  )
}

export default App
