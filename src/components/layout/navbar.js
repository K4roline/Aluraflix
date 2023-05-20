import { Link } from "react-router-dom"

import container from "./container"

import styles from './navbar.modules.css'
import Logo from '../imgs/logo.png'

function Navbar() {
    return (
        <nav class={styles.navbar}>
            <container>
                <Link to="/">
                    <img src="./components/imgs/logo.png"/>
                </Link>
                <ul class={styles.list}>
                    <li class={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li class={styles.item}>
                        <Link to="/addVideo">Adicionar Video</Link>
                    </li>
                </ul>
            </container>
        </nav>
    )
}

export default Navbar