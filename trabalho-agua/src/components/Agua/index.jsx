import { useState, useEffect} from 'react'
import './styles.css'

function Agua() {
  
  const [parabens, setParabens] = useState("")
  const [dia, setDia] = useState("")
  const [hora, setHora] = useState("")

  const [totalCopos, setTotalCopos] = useState(0)
  const [copoMl, setCopoMl] = useState()
  const [totalMl, setTotalMl] = useState(0)
  const [metaInput, setMetaInput] = useState()
  const [metaSent, setMetaSent] = useState(0)
  const [historico, setHistorico] = useState(`<h2>Histórico de copos</h2><p class="historicoLinha">Nenhum copo registrado`)
  const [htmlHistorico, setHtmlHistorico] = useState("")

  let data = new Date();
  let dataDia = data.getDate() +'/'+ (data.getMonth()+1) +'/'+ data.getFullYear();

  useEffect(() => {
    setTimeout(() => {
      setDia(dataDia);
      let dataHora = data.getHours();
      if(data.getMinutes()<10) {
        dataHora += ':0' + data.getMinutes();
      }
      else {
        dataHora += ':' + data.getMinutes();
      }
      if(data.getSeconds()<10) {
        dataHora += ':0' + data.getSeconds();
      }
      else {
        dataHora += ':' + data.getSeconds();
      }
      setHora(dataHora);
    }, 1000);
  });

  useEffect(() => {
      if(htmlHistorico != "") {
        setHtmlHistorico(`<div id="listaDeHistoricos">${historico}</div>`);
      }
  });

  const adicionar = () => {
    if(copoMl > 0) {
      setTotalCopos(totalCopos+1)
      // setTotalMl(copoMl*(totalCopos+1))
      setTotalMl(parseFloat(totalMl)+parseFloat(copoMl))
      if(historico == `<h2>Histórico de copos</h2><p class="historicoLinha">Nenhum copo registrado`) {
        setHistorico(`<h2>Histórico de copos</h2><p class="historicoLinha"> 🥤 de ${copoMl}ml adicionado no dia ${dia} às ${hora} </p>`)
      }
      else {
        setHistorico(historico + `<p class="historicoLinha"> 🥤 de ${copoMl}ml adicionado no dia ${dia} às ${hora} </p>`)
      }
    
      if((parseFloat(totalMl)+parseFloat(copoMl)) >= metaSent && metaSent != 0) {
        setParabens("Parabéns, você cumpriu sua meta diária!")
      }
      else if(metaSent == 0) {
        setParabens("Sem meta diária")
      }
      else {
        setParabens("")
      }
    }
    else {
      alert('Valor inválido, a quantidade de ml do copo só pode ser um número maior que 0')
    }
  }

  const resetar = () => {
    setParabens("")

    setTotalCopos(0)
    setTotalMl(0)
  }

  const mostrarHistorico = () => {
    setHtmlHistorico(`<div id="listaDeHistoricos">${historico}</div>`)
  }

  const resetarHistorico = () => {
    setHistorico(`<h2>Histórico de copos</h2><p class="historicoLinha">Nenhum copo registrado`)
  }

  const ocultarHistorico = () => {
    setHtmlHistorico("")
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(metaInput >= 0) {
      setMetaSent(metaInput);

      if((parseFloat(totalMl)+parseFloat(copoMl)) >= metaInput && metaInput != 0) {
        setParabens("Parabéns, você cumpriu sua meta diária!")
      }
      else if((parseFloat(totalMl)+parseFloat(copoMl)) >= metaInput && metaInput == 0) {
        setParabens("Sem meta diária")
      }
      else {
        setParabens("")
      }
    }
    else {
      alert('Sua meta de mls precisa ser um número maior ou igual a 0')
    }
    
  }

  return (
    <main>
      <h1>Contador de copos d'água bebidos</h1>
      <h3>{parabens}</h3>
      <h1>{dia} - {hora}</h1>

      <div id="status">
        <p>Meta diária: {metaSent}ml</p>
        <p>Total de copos: {totalCopos}</p>
        <p>Total de água: {totalMl}ml</p>
      </div>

      <div id="formsEHistorico">
      <div id="forms" class= "menus">
        <form onSubmit={handleSubmit} class="escolha" id="meta">
          
          <label>Digite sua meta diária em ml:
            <input 
              type="number" 
              value={metaInput}
              onChange={(e) => setMetaInput(e.target.value)}
            />
          </label>
          <div>
            <input type="submit" class="botao"/>
          </div>
          
        </form>

        <div class="escolha">
          <label>Digite a quantidade de mls por copo:
            <input 
              type="number" 
              value={copoMl}
              onChange={(e) => setCopoMl(e.target.value)}
            />
          </label>

          <button class="botao" onClick={adicionar}>Adicionar copo</button>
          <button class="botao" onClick={resetar}>Resetar contagem</button>
        </div>
      </div>

      <div id="botoesHistorico" class="menus">
        <button class="botao" onClick={mostrarHistorico}>Mostrar histórico</button>
        <button class="botao" onClick={ocultarHistorico}>Ocultar histórico</button>
        <button class="botao" onClick={resetarHistorico}>Resetar histórico</button>
      </div>
      </div>

      <div
      dangerouslySetInnerHTML={{__html: htmlHistorico}}
      />
    </main>
  )
}

export default Agua