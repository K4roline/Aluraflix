import { Link } from "react-router-dom"

import Container from "./container"

import Styles from './navbar.modules.css'
import Logo from '../imgs/logo.png'

function Navbar() {
    return (
        <nav class={Styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={Logo}/>
                </Link>
                <ul className={Styles.list}>
                    <li className={Styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={Styles.item}>
                        <Link to="/addVideo">Adicionar Video</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar