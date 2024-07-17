import './App.css'
import NavCarrito from './componets/NavCarrito'
import { MiaProvaider } from './context/MiaContext'

function App() {
  

  return (
    <MiaProvaider>
        <NavCarrito />
    </MiaProvaider>
  )
}

export default App
