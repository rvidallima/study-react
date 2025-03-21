import { useEffect, useState } from "react";
import styles from  "./style.module.css"

export default function BuscaCep() {

    const [cep, setCep] = useState('')
    const [data, setData] = useState([])

    const handleBuscar = () => {
        if(!cep || cep.length != 8)  return

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
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
                <h1 className={styles.title}>Busque o seu CEP</h1>
                <input onChange={(e) => setCep(e.target.value)} type="number" name="cep" className={styles.input} /> 
                <button disabled={cep.length === 8 ? false : true} onClick={handleBuscar} className={styles.button}>Pesquisar</button> 
                { data &&
                    <div>
                        <h3>{data?.logradouro}</h3>
                        <h3>{data?.bairro}, {data?.localidade}-{data?.uf}</h3>
                    </div>
                }
            </div>
    )
}