import { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import './filme-info.css';
import api from '../../services/api';

export default function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    // `` se chama template string
    //  o await faz todo papel de aguardar com que a requisição retorne seu resultado
    // async/await no ES8 o código se tornou mais limpo, evitando a necessidade de criar cascatas de .then e .catch
    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            if(response.data.length === 0){
                //Tentou acessar com um id que não existe, navego ele para home!
                navigate('/');
                return;
            }

            setFilmes(response.data);
            setLoading(false);
        }

        loadFilmes();
    }, [navigate, id]);

    function salvarFilme(){
        const minhaLista = localStorage.getItem('filmes');
        //caso venha vazio automaticamente ele passa para lista
        let filmesSalvos = JSON.parse(minhaLista) || [];
        //Se caso já esteja salvo este filme ignora
        //some percorre todo o array procurando o parametro que passamos, ele retorna um bool
        const VerificaFilme = filmesSalvos.some((filmesSalvo)=> filmesSalvo.id === filmes.id)
        if(VerificaFilme){
            toast.info('Você já possui esse filme salvo.');
            return;
        }
        filmesSalvos.push(filmes)
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!');
    }

    if(loading){
        return(
            <div className='filme-info'>
                <h1>Carregando seu filme...</h1>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h1>{filmes.nome}</h1>
            <img src={filmes.foto} alt={filmes.nome} />

            <h3>Sinopse</h3>
            {filmes.sinopse}
            <div className='botoes'>
                <button onClick={salvarFilme} >Salvar</button>
                <button>
                    <a  href={`https://www.youtube.com/results?search_query=${filmes.nome} Trailer`} target="_blank" rel="noreferrer">
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
   
}
