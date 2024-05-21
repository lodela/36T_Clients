import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppNav } from "./Components/AppNav";
import { Home } from "./Pages/Home";
import { Clients } from "./Pages/Clients";
import { Users } from "./Pages/Users";
export const App = () => {
  return (
    <Router>
      <AppNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/clients" element={<Clients />} />
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
✅ El objetivo consiste en realizar un crud ( altas, bajas, cambios) de una entidad llamada
cliente accediendo a una api ( descrita más adelante ) , ( se puede utilizar fetch o axios o
cualquier otra alternativa )
 * 
✅  La entidad CLIENTE tiene 4 campos: id ( llave primaria autoincrementable) , nombre_comercial ( no puede ser cadena vacía y no nulo) , telefono (no puede ser nulo ) , correo ( tiene que tener formato de correo , no puede ser nulo )  
 */

/** 
 * 3.- Creacion de la tabla.
 * ✅ Hacer una pantalla con la siguiente url: /clientes, donde se muestre una tabla mostrando la información de los clientes, 
 * ✅ Poner un botón para eliminar los registros y 
 * ✅ Poner un botón para editarlos
 * Se tiene que agregar un cuadro de búsqueda en la tabla para filtrar por nombre comercial 
 * A continuación se muestra una idea de lo que se busca ( no tiene que ser igual ) 

*/
/**
 * 4.- Hacer una pantalla con la siguiente url: /nuevo-cliente, donde se muestre un formulario con los campos del cliente, 
Se tiene que validar lo siguiente:
* Que el correo sea válido 
* Nombre comercial no sea cadena vacía o nulo

 */

/**
 * Hacer una pantalla con la siguiente url: /cliente/:id, donde se muestre un formulario para poder editar el cliente que viene en :id, ( se tiene que precargar la información del cliente ). 
 * Se tiene que validar lo siguiente: 
 * que el correo sea válido , 
 * nombre comercial no sea una cadena vacía

 */
