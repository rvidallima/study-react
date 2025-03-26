import { useEffect, useState } from "react";
import styles from  "./style.module.css"

export default function BuscarPokemon() {

    const [nome, setNome] = useState('')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState('')

    const handleGetPokemon = () => {
        if(!nome)  return
        setData(null)
        setErro(null)
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then(res => {
            setData(null)
            if(!res.ok) {
               console.log('Erro: Deu ruim isso aqui: ' + res.status)
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setLoading(false)
            var cor = data.game_indices[1].version.name;
            document.getElementById("div1").style.backgroundColor = cor;
            console.log(data)
        })
        .catch(err => {
            setLoading(false)
            setErro('Não encontrado!')
            console.log('Erro:', err)
        })
    }

    return (
            <div id="div1" className={styles.container}>
                <h1 className={styles.title}>Busque Pokemon</h1>
                <input onChange={(e) => setNome(e.target.value)} type="text" className={styles.input} placeholder="Digite o nome do pokemon" /> 
                <button onClick={handleGetPokemon} className={styles.button} disabled={nome.length <= 0 ? true : false} onChange={(e) => setNome(e.target.value)} value={nome}>Pesquisar</button> 
                { data && 
                        <div className="">
                        <h3>Importância: {data?.weight} </h3>
                        <img src={data?.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`Foto do ${nome}}`} />
                        <h3 >{data?.name} {data?.game_indices[1].version.name}</h3>
                        </div>
                }
                { loading && <p><strong> Carregando...</strong></p> }
                { erro &&<h3>{erro}</h3> }
            </div>
    )
}