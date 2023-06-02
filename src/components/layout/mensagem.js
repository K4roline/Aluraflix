import { useState, useEffect } from 'react'
import Style from './mensagem.modules.css'

function mensagem({ type, msg }) {
    const [visible, setVisible] = useState(false)
    
    useEffect(() => {
        if(!msg) {
            setVisible(false) 
        };
            setVisible(true)

            const timer = setTimeout(() => {
                setVisible(false)
            }, 3000)

            return() => clearTimeout(timer)
    }, msg)

    return (<> { visible && (
        <div className={`${Style.mensagem} ${Style.type}`}>{msg}</div>
    )}
    </>)
}

export default mensagem