import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './index'
import Idade from './idade/Idade.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login /> */}
    <Idade />
  </React.StrictMode>
)
