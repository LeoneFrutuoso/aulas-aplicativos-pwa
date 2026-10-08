import "./App.css";
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Rodape from "./componentes/Rodape/Rodape";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import Roteador from "./Roteador";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <Roteador/>
      <Rodape />
    </>
  );
}

export default App;
