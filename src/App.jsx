import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Title from './components/Title/Title'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { ToastContainer, toast } from 'react-toastify';
import CartContextProvider, { CartContext } from './Context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/dist/sweetalert2.min.css';

function App() {
  const title = 'Strong Suplementos'
  const subtitle = 'Suplementos deportivos para potenciar tu rendimiento'
  return (
    <Router>
      <CartContextProvider>
        <Navbar />
        <Title title={title} subtitle={subtitle}/>
        <ToastContainer />
        <Routes>
          <Route path='/' element={<ItemListContainer /> }/>
          <Route path='/category/:cid' element={<ItemListContainer /> }/>
          <Route path='/detalle/:pid' element={<ItemDetailContainer/> }/>
          <Route path='/cart' element={<CartContainer />}/>
        </Routes> 
        <Footer />
      </CartContextProvider>
    </Router>
  )
}

export default App
