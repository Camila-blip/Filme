import { 
    BrowserRouter as Router,  
    Routes, 
    Route
} from 'react-router-dom';
import Home from './Pages/Home';
import Filme from './Pages/Filme';
import Favoritos from './Pages/Favoritos'
import Erro from './Pages/Erro'
import Header from './Components/Header';

const Rotas = () =>{
    return(
        <Router>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/filme/:id" element={<Filme/>} />
                <Route exact path="/Favoritos" element={<Favoritos/>} />
                <Route  path="*" element={<Erro/>} />
            </Routes>
        </Router>
    )
}

export default Rotas;