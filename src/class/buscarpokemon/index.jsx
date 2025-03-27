import { useEffect, useState } from "react";
import styles from  "./style.module.css"

export default function BuscarPokemon() {
    const [nome, setNome] = useState('')
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState('')
    const arrayTypes = {
        'normal': '#e0e1dd',
        'fighting': '#fff',
        'flying': '#fff',
        'poison': '#0681',
        'ground': '#fff',
        'rock': '#fff',
        'bug': '#0617',
        'ghost': '#fff',
        'steel': '#fff',
        'fire': '#0059',
        'water': '#fff',
        'grass': '#fff',
        'electric': '#ffa',
        'psychic': '#0063',
        'ice': '#fff',
        'dragon': '#fff',
        'dark': '#0359',
        'fairy': '#fff',
        'stellar': '#fff',
        'unknown': '#fff'
    }
    
    console.log(arrayTypes.dark)
    const handleGetPokemon = () => {
        if(!nome)  return
        setData(null)
        setErro(null)
        setLoading(true)
        fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then(res => {
            setData(null)
            if(!res.ok) {
                setErro(res.status == 404 ? 'Não encontrado!' : 'Erro: Deu ruim isso aqui: ' + res.status)
                console.log('Erro: Deu ruim isso aqui: ' + res.status)
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
            console.log('Erro:', err)
        })
    }

    console.log(data?.types[0].type.name)
    const handleTypeColor = data && arrayTypes[data.types[0].type.name]
    
    return (
            <div className="" >
                <h1 className={styles.title}>Busque Pokemon</h1>
                <input onChange={(e) => setNome(e.target.value)} type="text" className={styles.input} placeholder="Digite o nome do pokemon" /> 
                <button onClick={handleGetPokemon} className={styles.button} disabled={nome.length <= 0 ? true : false} onChange={(e) => setNome(e.target.value)} value={nome}>Pesquisar</button> 
                { data && 
                        <div className={styles.divfigura} style={{backgroundColor: handleTypeColor}}>
                            <div width="200px">
                            <h3>Importância: {data?.weight} </h3>
                            </div>
                            <img src={data?.sprites.versions['generation-v']['black-white'].animated.front_default} alt={`Foto do ${nome}}`} />
                            <h3 >{data?.name} {data?.types[0].type.name}</h3>
                        </div>
                }
                { loading && <p><strong> Carregando...</strong></p> }
                { erro &&<h3>{erro}</h3> }
            </div>
    )
}