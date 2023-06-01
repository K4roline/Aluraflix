import { useState, useEffect } from 'react'

import styles from './formulario.modules.css'
import Input from '../form/input'
import Select from '../form/select'
import envioBtn from '../form/envioBtn'

function Formulario({handleSubmit, btnText, projectData}) {

    const [categoria, setCategoria] = useState([])
    const [video, projects] = useState(projectData || {})

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

        const submit = (e) => {
            e.preventDefault()
            handleSubmit(projects)
        }

        function handleChange(e) {
            projects ({...projects, [e.target.name]: e.target.value})
        }

        function handleCategory(e) {
            projects ({...projects, categoria: {id: e.target.value, name:e.target.options[e.target.selectedIndex].text, }})
        }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nome do video"
                name="name"
                placeholder="Insira o titulo do Video"
                handleOnChange={handleChange}
                value={projects.name ? projects.name : ''}
            />
            <Input 
                type="text"
                text="Descrição do video"
                name="name"
                placeholder="Insira o assunto do video"
                handleOnChange={handleChange}
            />
            
            <Select name="category_id" text="Selecione uma categoria" options={categoria} handleOnChange={handleCategory} value={projects.categoria ? projects.categoria.id : ''} />
            <envioBtn text={btnText}/>
        </form>
    )
}

export default Formulario