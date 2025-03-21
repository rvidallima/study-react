import './style.css'
import Arrowdown from '../../assets/images/icons/arrow-down.svg' 
import Arrowup from '../../assets/images/icons/arrow-up.svg'

import { useEffect, useState } from "react";

export default function Accordion() {

    const [active, setActive] = useState(false)

    function handleAccordion() {
        setActive(!active)
    }
    
    return (
        <div className="accordion-container">
            <div className="accordion-top">
                <h3>Question text goes here</h3>
                <button type="button" onClick={handleAccordion}> <img src={active ? Arrowup : Arrowdown} alt="icone de abrir fechar" /> </button>
            </div>
            {
                active && 
            <div className="accordion-botton">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
            </div>
            }
        </div>
    )
}