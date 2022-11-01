import {useParams, useLocation} from 'react-router-dom'


const ContatoDetalhes = () => {
  const {id} = useParams();
  const {state} = useLocation();

  const renderizaNome = () => {
    switch(id) {
      case '1':
        return 'Jos'
      case '2':
        return 'Nom2'
      case '3':
        return 'Tes'
      default:
        return 'DESCONHECIDO'
    }
  }
  
  return (
    <>
      <h1>
        {/* {id == '2' && "Contato: Nom2"} */}
        {/* {id == '3' ? "Tes do ternario" : null} */}
        Contato: {renderizaNome()}
      </h1>
    </>
  )
}

export default ContatoDetalhes