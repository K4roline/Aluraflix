import Styles from './home.module.css'

function Home() {
    return (
        <div className={Styles.home_container}>
            <h1>Bem vindo(a), continue assistindo:</h1>
            <ul>
                <li className={Styles.item}>
                <linkbutton to="AddVideo"/>
                </li>
            </ul>
        </div>
    )
}

export default Home