import './App.css'
import Count from '../class/count'
import { useState } from 'react'

export default function App() {

    const [active, setActive] = useState(false)

    function hsndleActive() {
        setActive(!active)
    }

    return (
        <div className=''>
            <button onClick={hsndleActive}> click para mostrar </button>
        {
            active && <h1>estou ativo</h1>
        }
        </div>
    )

}