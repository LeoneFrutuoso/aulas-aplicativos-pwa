import ListaDeProdutos from "./paginas/ListaDeProdutos/ListaDeProdutos";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <ListaDeProdutos/>,
  }
]);


function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;
