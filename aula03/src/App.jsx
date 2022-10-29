import {useState} from 'react'
import './App.css'

function App() {
  const [textoDigitado, setTextoDigitado] = useState("Inicio")

  const handleText = () => { 
    setTextoDigitado("")
  }

  const handleTextoDigitado = (texto) => {
    setTextoDigitado(texto.target.value)
  }

  return (
    <>
      <h1>Inputs Controlados</h1>
      <h2>Informação digitada: {textoDigitado}</h2>
      <input type="text" placeholder="DIGITE SEU TEXTO" onChange={ handleTextoDigitado} value={textoDigitado}/>
      <button onClick={handleText}>Enviar</button>
    </>
  )
}

export default App
