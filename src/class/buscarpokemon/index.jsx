import { useEffect, useState } from "react";
import styles from  "./style.module.css"

export default function BuscarPokemon() {

    const [nome, setNome] = useState('')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState(false)
    const [deserro, setDesErro] = useState('')

    const handleGetPokemon = () => {
        if(!nome)  return
        setLoading(true)
        setErro(false)
        fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then(res => {
            setErro(false)
            setData(null)
            if(!res.ok) {
                setErro(true)
                if (res.status == 404) {
                    setDesErro('Não encontrado!')
                } else {
                    setDesErro('Erro: Deu ruim isso aqui: ' + res.status)
                }               
            }
            return res.json()
        })
        .then(data => {
            setData(data)
            setLoading(false)
            console.log(data)
        })
        .catch(err => {
            setLoading(false)
            //setErro(true)
            //setDesErro('err')
            console.log('Erro:', err)
        })
    }

    return (
            <div className={styles.container}>
                <h1 className={styles.title}>Busque Pokemon</h1>
                <input onChange={(e) => setNome(e.target.value)} type="text" className={styles.input} placeholder="Digite o nome do pokemon" /> 
                <button onClick={handleGetPokemon} className={styles.button} disabled={nome.length <= 0 ? true : false} onChange={(e) => setNome(e.target.value)} value={nome}>Pesquisar</button> 
                { data && 
                        <div className="">
                        <h3>Importância: {data?.weight} </h3>
                        <img src={data?.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`Foto do ${nome}}`} />
                        <h3  className="color: red">{data?.name} {data?.game_indices[0].version.name}</h3>
                        </div>
                }
                { loading && <p><strong> Carregando...</strong></p> }
                { erro &&<h3>{deserro}</h3> }
            </div>
    )
}