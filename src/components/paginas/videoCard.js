import Styles from './videoCard.modules.css'

function videoCard({id, name, category, handleRemove}) {
    return (
        <div className={videoCard}>
                <h4>{name}</h4>
                <p>
                    <span  className={`${Styles[category.toLowerCase()]}`}></span> {category}
                </p>
            <div>
                <p>editar</p>
                <p>remover</p>

                <Link to='/'/>

                <button id='excluir'>Excluir</button>
            </div>
        </div>
    )
}

export default videoCard