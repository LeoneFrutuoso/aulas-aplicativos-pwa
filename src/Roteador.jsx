import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import ListaDeProdutos from "./paginas/ListaDeProdutos/ListaDeProdutos";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const roteador = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },
  {
    path: "lista-produtos",
    element: <ListaDeProdutos />,
  },
{
  patc:"lista-tarefas"
  element: <PaginaListaTarefas/>,
}

]);

function Roteador() {
  return <RouterProvider router={roteador} />;
}

export default Roteador;