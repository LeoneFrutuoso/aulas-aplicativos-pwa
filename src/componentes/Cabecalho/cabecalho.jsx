
import Avatar from '../Avatar/Avatar';
import './Cabecalho.css'

function Cabecalho() {
    return (<header className='Cabecalho_root'>
        <img src='/favicon.svg' />
        

     <Avatar  nome="Joao Silva Fernades" idade={30}  outraPropriedade="valor"/>
    </header>);
}

export default Cabecalho