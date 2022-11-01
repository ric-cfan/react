import {Link} from 'react-router-dom'

export const Contatos = () => {
  const contato = {
    id: 1,
    nome: "Joao Felipe",
    email: "jogao@serratec.com"
  }
  
  return (
    <>
      <h1>CONTATOS</h1>
      <Link to='/' >HOME</Link>
      <Link to='/galeria' >GALERIA</Link>

      <ol>
        <li><Link to={`./${contato.id}`} state={{data: contato}}>{contato.nome}</Link></li>
        <li><Link to='./2' >Nom2</Link></li>
        <li><Link to='./3' >Tes</Link></li>
      </ol>
    </>
  )
}