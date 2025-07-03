import Principal from "./componentes/Principal/Principal.jsx"
import Login from "./componentes/Login/Login.jsx"
import Administracion from "./componentes/Administracion/Administracion.jsx"
import Menu from "./componentes/Menu/Menu.jsx"
import Reservas from "./componentes/Reservas/Reservas.jsx"

//import './App.css'

function App({pagina}) {
  
  if(pagina === "Principal") return <Principal />;
  if(pagina === "Login") return <Login />;
  if(pagina === "Administracion") return <Administracion />;
  if(pagina === "Menu") return <Menu />;
  if(pagina === "Reservas") return <Reservas />;
  
  return <h1>404 - Página no encontrada</h1>;

}

export default App
