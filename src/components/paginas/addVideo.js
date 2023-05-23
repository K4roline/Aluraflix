import Formulario from '../projeto/formulario'
import Styles from './addVideo.modules.css'

function Add() {
    return (
        <div className={Styles.newvideo_container}>
            <h1>Adicione o video que deseja salvar</h1>
            <Formulario/>
        </div>
    )
}

export default Add
