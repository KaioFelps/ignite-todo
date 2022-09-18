import styles from "./tasks.module.css"
import { Trash, CheckCircle } from "phosphor-react"

type Props = {
    text: string;
    id: number;
    onDelete: (el:number) => void
}

export function Task(props: Props) {

    function actionDeleteTask() {
        props.onDelete(props.id)
    }

    return (
        <div className={`${styles.taskBox}`}>
            <label>
                <input type="checkbox" name="ConcludeTask" aria-label="Marcar como concluído"/>
                <div className={styles.behindInput}></div>
                <CheckCircle size={22} weight="fill"/>
            </label>
            <p>{props.text}</p>
            <button
                aria-label="Deletar esta tarefa"
                onClick={actionDeleteTask}
                >
                <Trash size={16} weight="bold"/>
            </button>
        </div>
    )
}