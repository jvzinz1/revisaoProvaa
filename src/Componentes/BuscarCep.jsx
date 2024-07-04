import { useState } from "react"

export default function BuscarCep(){
    const [cep, setCep] = useState('')
    const[endereco, setEndereco] = useState(null)

    const fetchData = async () => {
        try{
            const response = await fetch (` https://viacep.com.br/ws/${cep}/json/
            `) //crase
            const data = await response.json()
            setEndereco(data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
<div className="content">
    <h1>buscar endereço por CEP</h1>
    <input 
    type='text'
    value={cep}
    placeholder="digite aqui"
    onChange={(e) => setCep (e.target.value)}>
    </input>
    <button onClick={fetchData}>buscar</button>

    {endereco && (

        <div className="endereco">
        <p> Rua: {endereco.logradouro}</p>
        <p> Cidade: {endereco.localidade}</p>
        <p>Bairro: {endereco.bairro}</p>
        <p>UF: {endereco.uf}</p>
        </div>
    )
    
    }
</div>
    )
}