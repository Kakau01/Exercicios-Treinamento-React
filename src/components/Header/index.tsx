// COMPONENTE DE CABEÇALHO.
import './styles.css';

interface HeaderProps {
    titulo: string;
}

const Header = (props: HeaderProps) => {
    return(
        <div className="app-header">{props.titulo}</div>
    )
}

export default Header;