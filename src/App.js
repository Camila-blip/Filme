
import './estilo.css';
import Rotas from './rotas';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

export default function App() {
    return (
        <div className="app">
            <Rotas/>
            <ToastContainer autoClass={3000}/>
       </div>
    );
}