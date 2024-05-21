import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppNav } from "./Components/AppNav";
import { Home } from "./Pages/Home";
import { Users } from "./Pages/Clients";
export const App = () => {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
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
