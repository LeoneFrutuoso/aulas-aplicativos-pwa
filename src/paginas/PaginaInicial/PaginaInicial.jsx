import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";

function PaginaInicial() {
  return (
    <Principal>
      Conteúdo principal
      <BotaoCustomizado
        tipo="primario"
        aoClicar={() => alert("Salvar clicado!")}
      >
        Salvar
      </BotaoCustomizado>
      <BotaoCustomizado tipo="secundario">Cancelar</BotaoCustomizado>
      <BotaoCustomizado>Enviar</BotaoCustomizado>
    </Principal>
  );
}

export default PaginaInicial;
