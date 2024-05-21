import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppNav } from "./Components/AppNav";
import { Home } from "./Pages/Home";
import { Clients } from "./Pages/Clients";
export const App = () => {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Clients />} />
      </Routes>
    </Router>
  );
};

/*
1.- Inicializar un proyecto
  El objetivo es el de iniciar un proyecto en react
    ✅ Crear proyecto en react ( no importa la forma )
    ✅ Se tiene que instalar bootstrap en el proyecto ( cualquier versión )
    ✅ Se tiene que instalar react dom router en el proyecto
*/

/**
 * 2.- Creación del CRUD
El objetivo consiste en realizar un crud ( altas, bajas, cambios) de una entidad llamada
cliente accediendo a una api ( descrita más adelante ) , ( se puede utilizar fetch o axios o
cualquier otra alternativa )
 * 
 */
