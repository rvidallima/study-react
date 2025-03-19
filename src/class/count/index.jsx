import { useState } from "react"

export default function Count() {

    const atual = 2025
    const minimo = 2020
    const [ count, setCount] = useState(atual)

    function handleDecrement() {
        let val = count-1
        if (val <= minimo) {
            setCount(minimo)
        }
        else {
            setCount(val)
        }
    }

    function handleIncrement() {
        setCount(count+1)
    }

    function resteCount() {
        setCount(atual)
    }

    return (
        <div className="">
            <h1>Ano: <button onClick={handleIncrement}>+</button> {count} <button onClick={handleDecrement}>-</button> <button onClick={resteCount}>reset</button> </h1>            
        </div>
    )
}