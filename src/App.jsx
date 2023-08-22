import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/Navbar/Navbar'
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'


import './App.css'

function App() {
  const titulo = 'Strong Suplementos'
  const subtitulo = 'Suplementos deportivos para potenciar tu rendimiento'
  return (
    <div>
      <Navbar />
      <Titulo titulo={titulo} subtitulo={subtitulo}/>
      <Footer />
    </div>
  )
}

export default App
