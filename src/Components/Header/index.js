import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div className='centralizando'>
                <Link className='logo' to="/">Filmaria</Link>
                <Link className='favoritos' to="/favoritos">Salvos</Link>
            </div>
       </header>
    );
}