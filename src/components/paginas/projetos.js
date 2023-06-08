import mensagem from "../layout/mensagem"
import { useLocation } from "react-router-dom"
import styles from "./projetos.modules.css"
import videoCard from "./videoCard"
import { useState, useEffect } from "react"


function projetos() {

    const [projetos, setProjetos] = useState([]) 

    const location = useLocation()
    let mensagem = ''
    if(location.state) {
        mensagem = location.state.mensagem
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resposta => resposta.json())
          .then(data => {setProjetos(data)})
          .catch(erro => console.log(erro))
    }, [])

    function removeVideo(id) {
        const serviceUpdated = videoCard.service.filter((service) => video.id !== id)
    
        const projectUpdated = projetos

        projectUpdated.service = serviceUpdated

        fetch(`https://localhost:5000/addVideo/${projectUpdated.id}`, {
            method:'PATCH',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(projectUpdated)
        }).then(resposta => resposta.json())
          .then(data => {setProjetos(projectUpdated)})
          .catch(erro => console.log(erro))
    }

    return (
        <div className={styles.projetos_container}>
            <div className={styles.titulo_container}>
                <h1>Meus videos</h1>
            </div>
            {mensagem && <mensagem type="sucesso" msg={mensagem}/> }
            {projetos.length > 0 && projetos.map((projetos) => (<videoCard id={videoCard.id} name={videoCard.name} category={videoCard.category.name} key={projetos.id}/>))}
        </div>
    )
}


export default projetos