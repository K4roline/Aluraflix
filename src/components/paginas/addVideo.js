import { history } from 'react-router'
import Formulario from '../projeto/formulario'
import Styles from './addVideo.modules.css'

function Add() {

    const history = history()

    function createPost(project) {
        // Salvar Nome do video e Descrição do video

        project.nome = 0
        project.descricao = []

        fetch('http://localhost:5000/addVideo', {
            method: 'POST',
            Headers: {'Content-type': 'application/json'}, 
            body: JSON.stringify(project),
        }).then((resposta) => resposta.json())
          .then((data)=> {console.log(data); history.push('/addVideo', {message: 'Video adicionado com sucesso!'})})
          .catch(erro => console.log(erro))
    }

    return (
        <div className={Styles.newvideo_container}>
            <h1>Adicione o video que deseja salvar</h1>
            <Formulario handleSubmit={createPost} btnText="Adicionar video" />
        </div>
    )
}

export default Add
