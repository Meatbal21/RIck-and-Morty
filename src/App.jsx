import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Homepage />
      <Footer />
    </div>
  )
}

export default App