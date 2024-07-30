import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavCarrito from './componets/NavCarrito'
import { MiaProvaider } from './context/MiaContext'
import { Route, Routes } from 'react-router-dom'
import Carrito from './views/Carrito'
import Home from './views/Home'
import PizzasView from './views/PizzasView'

function App() {
  

  return (
    <MiaProvaider>
        <NavCarrito />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/carrito' element={<Carrito/>} />
          <Route path='/pizzas/:id' element={<PizzasView/>} />
        </Routes>
    </MiaProvaider>
  )
}

export default App
