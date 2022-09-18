import styles from "./Notask.module.css"
import clipboard from "./assets/Clipboard.svg"

export function Notask() {
    return (
        <div className={styles.wrapper}>
            <img src={clipboard} alt="Clipboard" aria-label="Clipboard indicando que não há afazeres" />

            <p>
                Você ainda não tem tarefas cadastradas <br/>
                <span>Crie tarefas e organize seus itens a fazer</span>
            </p>
        </div>
    )
}