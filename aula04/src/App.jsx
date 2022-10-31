import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<h1>HOME</h1>}/>
      <Route path="/contatos" element={<h1>CONTATOS</h1>}/>
    </Routes>
  )
}

export default App
