import Styles from './home.module.css'
import Container from '../layout/container'

function Home() {
    return (
        <div className={Styles.home_container}>
            <h1>Bem vindo(a), continue assistindo:</h1>
                <linkButton to="/addVideo" text="Adicionar video"/>
                <li className={Styles.item}>
                    <linkbutton to="AddVideo"/>
                    <a href='/addVideo'>Add Video</a>
                </li>

            <Container customClass="start">
            </Container>
        </div>
    )
}

export default Home