import { Link } from 'react-router-dom'
import Styles from './linkButton.modules.css'

function linkButton({to, text}) {
    return (
        <Link className={Styles.btn} to={to}>
            {text}
        </Link>
    )
}

export default linkButton