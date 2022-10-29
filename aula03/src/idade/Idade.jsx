import '../index.css'
import { useState } from 'react'

const Idade = () => {
  const [ola, setOla] = useState("Olá!")
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState()

  const verificador = () => {
    if(nome == "") {
      alert("Nome inválido")
    }
    else if(idade < 18 && idade >= 0) {
      setOla("Olá " + nome + ", você é menor de idade!")
    }
    else if (idade >= 18 && idade <= 200){
      setOla("Olá " + nome + ", você é maior de idade!")
    }
    else {
      alert("Idade inválida")
    }
  }

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems: 'center'}}>
      <h1>{ola}</h1>
  
      <div style={{backgroundColor: "indigo", padding: 20, borderRadius: 12, width: '20vw'}}>
        <h2>Verificação de idade</h2>

        <input style={{backgroundColor: "black", textAlign:'center'}} type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)}/>

        <h2></h2>
        <input style={{backgroundColor: "black", textAlign:'center'}}type="number" placeholder="Digite sua idade" value={idade} onChange={(e) => setIdade(e.target.value)}/>

        <div style={{marginTop: 20}}>
          <input type="button" value="VERIFICAR" onClick={verificador} style={{color: 'white', backgroundColor: 'black', fontWeight:'bolder'}}/>
        </div>
      </div>
    </div>
  )
}

export default Idade