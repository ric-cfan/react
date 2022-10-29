import './App.css'
import Header from './components/Header'
import Bio from './components/Bio'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <Bio texto="Bio"/>
      <Footer ></Footer>
    </div>
  )
}

export default App
