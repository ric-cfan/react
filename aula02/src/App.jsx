// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App

//ERRO NO VALOR - PROBLEMAS NA FILA DE EXECUÇÃO
    // setContador(contador + 1)
    // setContador(contador + 1)
    // setContador(contador + 1)
    
    // Assim funciona =)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)
    // setContador( prevState => prevState + 1)

import { useState } from 'react'


function App() {
  const [outroNome, setOutroNome] = useState("Outro nome")
  const [contador, setContador] = useState(0)
  const [vezes, setVezes] = useState("vezes")

  function clique() {
    if(outroNome == "Nome") {
      setOutroNome("Outro nome")
    } else {
      setOutroNome("Nome")
    }

    setContador(contador+1)

    if(contador == 0) {
      setVezes("vez")
    }
    if(contador == 1) {
      setVezes("vezes")
    }
  }

  function reset() {
    setContador(0)
    setOutroNome("Nome")
    setVezes("vezes")
  }

  return(
    <>
      <h1>{outroNome}</h1>
      <button onClick={clique}>Nome mudou {contador} {vezes}</button>
      <h1></h1>
      <button onClick={reset}>Resetar contagem</button>
    </>
  )
}

export default App