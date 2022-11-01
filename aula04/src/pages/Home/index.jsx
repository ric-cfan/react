import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
      {/* <a href="/contatos">CONTATOS</a> */}
      <Link to='/contatos' >CONTATOS</Link>
      <Link to='/galeria' >GALERIA</Link>
    </>
  )
}

export default Home;