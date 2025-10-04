import './App.css'
import { TablaRegistros } from './Components/TablaRegistros'
import { Formulario } from './Components/Formulario'
import { Navbar } from './Components/Navbar'

function App() {


  return (
    <div>
      <Navbar />
      
      <div>
        <h1 className='titulo-gestion'>Gestión de alumnos</h1>
        <img className='style-imagen' src='/src/assets/img/alumno.png' />
        <Formulario />
        <TablaRegistros />
      </div>
    </div>
  )
}

export default App
