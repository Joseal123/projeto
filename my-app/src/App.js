import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './componentes/routes.js'

// eslint-disable-next-line no-unused-vars
import { Button } from 'react-bootstrap'
// import AddProduct from './componentes/funcComponents'
// import AddCliente from './componentes/cliente'
import Routes from './componentes/routes.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes />
      </header>
    </div>
  )
}

export default App
