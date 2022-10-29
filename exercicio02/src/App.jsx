import { useState } from 'react'
import './App.css'

function App() {
  const [totalCopos, setTotalCopos] = useState(0)
  const [visual, setVisual] = useState("")
  const [copoMlInput, setCopoMlInput] = useState(0)
  const [copoMlSent, setCopoMlSent] = useState(0)
  const [totalMl, setTotalMl] = useState(0)

  let adicionar = () => {
    setTotalCopos(totalCopos+1)
    setVisual(visual + "🥤 ")
    setTotalMl(copoMlSent*(totalCopos+1))
  }

  let resetar = () => {
    setTotalCopos(0)
    setVisual("")
    setTotalMl(0)
    setCopoMlSent(0)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setCopoMlSent(copoMlInput)
    setTotalMl(copoMlInput*totalCopos)
  }

  return (
    <main>
      <h1>Contador de copos d'água bebidos</h1>
      <h2>{visual}</h2>
      <p>Total de copos: {totalCopos}</p>
      <p>Água por copo: {copoMlSent}ml</p>
      <p>Total de água: {totalMl}ml</p>
      <form onSubmit={handleSubmit}>
        <label>Digite a quantidade de mls por copo:
          <input 
            type="number" 
            value={copoMlInput}
            onChange={(e) => setCopoMlInput(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
      <button onClick={adicionar}>Adicionar copo</button>
      <button onClick={resetar}>Resetar contagem</button>
    </main>
  )
}

export default App
