import Principal from "../../componentes/Principal/Principal";
import "./ListaDeProdutos.css";

const produtos = [
  {
    nome: "Smartphone Samsung",
    preco: 3997.98,
    cores: ["#29d8d5", "#252a34", "#fc3766"],
  },
  {
    nome: "Notebook Acer",
    preco: 12599.89,
    cores: ["#ffd045", "#d4394b", "#f37c59"],
  },
  {
    nome: "Tablet Asus",
    preco: 1499,
    cores: ["#365069", "#47c1c8", "#f95786"],
  },
];

function ListaDeProdutos() {
  return (
    <Principal titulo="Lista de Produtos">
      {produtos.map((itemProduto, index) => {
        return (
          <div key={index} className="ListaDeProdutos_item">
            <h3>{itemProduto.nome}</h3>
            <strong>Preço:</strong>
            {itemProduto.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
            <br />
            <strong>Cores:</strong>

            <div className="ListaDeProdutos_cores">
              {itemProduto.cores.map((itemCor) => {
                return (
                  <div
                    className="ListaDeProdutos_cores_item"
                    style={{
                      backgroundColor: itemCor,
                    }}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </Principal>
  );
}

export default ListaDeProdutos;
