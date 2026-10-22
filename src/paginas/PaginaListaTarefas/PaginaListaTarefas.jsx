import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import { FaTrash } from "react-icons/fa6";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (descricaoTarefa.trim()) {
      const novaTarefa = { id: Date.now(), descricao: descricaoTarefa };

      setTarefas([...tarefas, novaTarefa]);
      setDescricaoTarefa("");
    } else {
      alert("Tarefa obrigatoria");
    }
  };
  const removerTarefa = (id) => {
    if (confirm("Deseja realmente remover a tarefa")) {
      const tarefasAtualizadas = tarefas.filter((item) => item.id !== id);
      setTarefas(tarefasAtualizadas);
    }
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <CampoCustomizado
        label="Tarefa"
        type="text"
        placeholder="Digite a descriçao de tarefas"
        value={descricaoTarefa}
        onChange={(e) => setDescricaoTarefa(e.target.value)}
      />

      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar Tarefa
      </BotaoCustomizado>

      
      {tarefas.map((item) => {
        return (
          <div key={item.id} className="paginaListaTarefas_item">
            <span>
              <input type="checkbox" />
              {item.descricao}
            </span>
            <FaTrash
              color="red"
              cursor="pointer"
              onClick={() => removerTarefa(item.id)}
            />
          </div>
        );
      })}
{!tarefas.length && 
(<span  className="paginaListaTarefas_item_vazia"> 
  Nenhuma Tarefa Cadastrada.
  </span>)}

    </Principal>
  );
}

export default PaginaListaTarefas;
