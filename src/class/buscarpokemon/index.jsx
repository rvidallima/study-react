import { useEffect, useState } from "react";
import styles from  "./style.module.css"

export default function BuscarPokemon() {

    const [nome, setNome] = useState('')
    const [data, setData] = useState([])

    const handleBuscar = () => {
        if(!nome)  return

        fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`)
        .then(res => {
            if(!res.ok) {
                throw new Error('Deu ruim isso aqui: ' + res.status);           
            }
            return res.json()
        })
        .then(data => {
            return setData(data)
        })
        .catch(err => {
            console.log('Erro:', err)
        })
    }

    return (
            <div className={styles.container}>
                <h1 className={styles.title}>Busque Pokemon</h1>
                <input onChange={(e) => setNome(e.target.value)} type="text" className={styles.input} /> 
                <button onClick={handleBuscar} className={styles.button}>Pesquisar</button> 
                { data &&
                        <div>
                        <h3>Importância: {data?.weight}</h3>
                        <img src={data?.sprites.back_default} alt="" />
                        </div>
                }
            </div>
    )
}