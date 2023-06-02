import mensagem from "../layout/mensagem"
import { useLocation } from "react-router-dom"
import styles from "./projetos.modules.css"


function projetos() {
    const location = useLocation()
    let mensagem = ''
    if(location.state) {
        mensagem = location.state.mensagem
    }

    return (
        <div className={styles.projetos_container}>
            <div className={styles.titulo_container}>
                <h1>Meus videos</h1>
            </div>
            {mensagem && <mensagem type="sucesso" msg={mensagem}/> }
        </div>
    )
}


export default projetos