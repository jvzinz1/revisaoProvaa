import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <div>
            <Link to="/buscar-cep">Pesquisar um CEP</Link>
        </div>
    )
}