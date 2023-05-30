import styles from './envioBtn.modules.css'

function envioBtn({text}) {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default envioBtn