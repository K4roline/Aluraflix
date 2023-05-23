import Styles from './home.module.css'

function Home() {
    return (
        <section className={Styles.home_container}>
            <h1>Bem vindo(a), continue assistindo:</h1>
            <ul>
                <li className={Styles.item}>
                <linkButton to="addVideo"/>
                </li>
            </ul>
        </section>
    )
}

export default Home