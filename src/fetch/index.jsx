import { useEffect, useState } from "react";

export default function Fetch() {
    
    const [data, setData] = useState([])

    console.log(data, 'estado inicial')

    //mock
    const url = 'https://viacep.com.br/ws/04140080/json/'

    useEffect(() => {
        fetch(url)
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
    }, [])

    // console.log(data, 'estado depois do set data')
    return (
        <div className="">
            <h1>Fetch 1</h1>       
            <h2>{data?.localidade}</h2>
        </div>
    )
}
