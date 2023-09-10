import { useRef, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Titulo from './components/Titulo/Titulo'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Formulario from './components/Formulario/Formulario'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import './App.css'
import Cart from './components/Cart/Cart'



function App() {
  const titulo = 'Strong Suplementos'
  const subtitulo = 'Suplementos deportivos para potenciar tu rendimiento'
  return (
    <Router>
      <Navbar />
      <Titulo titulo={titulo} subtitulo={subtitulo}/>
      <Routes>
        <Route path='/' element={<ItemListContainer /> }/>
        <Route path='/category/:cid' element={<ItemListContainer /> }/>
        <Route path='/detalle/:pid' element={<ItemDetailContainer /> }/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/' element={<Formulario /> }/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
