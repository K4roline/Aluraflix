import { useState, useEffect } from 'react'

import styles from './formulario.modules.css'
import Input from '../form/input'
import Select from '../form/select'
import envioBtn from '../form/envioBtn'

function Formulario({btnText}) {

    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/categoria", {
            method: "GET",
            headers: {
                'Content-Type': 'applications/json'
            }
        })  .then((resposta) => resposta.json())
            .then((data) => {
                setCategoria(data)
            })
            .catch((erro) => console.log(erro))
    }, [])

    return (
        <form className={styles.form}>
            <Input 
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o titulo do Video"
            />
            <Input 
                type="text"
                text="Descrição do projeto"
                name="name"
                placeholder="Insira o assunto do video"
            />
            
            <Select name="category_id" text="Selecione uma categoria" options={categoria}/>
            <envioBtn text={btnText}/>
        </form>
    )
}

export default Formulario