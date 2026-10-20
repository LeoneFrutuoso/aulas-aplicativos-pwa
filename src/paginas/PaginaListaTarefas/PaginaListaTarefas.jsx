import { useState } from "react";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";

function PaginaListaTarefas() {
  const [descricaoTarefa, setDescricaoTarefa] = useState("Fazer Café");
const [tarefas,settarefas] = useState ([])
  
  
  const adicionarTarefa = () => {
tarefas.push(descricaoTarefa)
settarefas([...tarefas]);


  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
     
      
      <CampoCustomizado
       label= "Tarefa" 
       type="text"
       placeholder="Digite a descriçao de tarefas"
       value= {descricaoTarefa}
       onChange={ (e) => setDescricaoTarefa (e.target.value)}
       />

      <BotaoCustomizado tipo="primario" aoClicar={adicionarTarefa}>
        Adicionar Tarefa
      </BotaoCustomizado>

{ tarefas.map((item) => {
return <li> {item}</li>
})}


    </Principal>
  );
}

export default PaginaListaTarefas;