import styles from "./tasks.module.css"
import { Trash, CheckCircle } from "phosphor-react"
import { ChangeEvent } from "react";

type Props = {
    text: string;
    id: number;
    isChecked?: boolean;
    onDelete: (el:number) => void;
    onCheck: (e: number) => void;
}

export function Task({isChecked = false, ...props}: Props) {

    function actionDeleteTask() {
        props.onDelete(props.id)
        props.onCheck(1)
    }

    function actionCheckTask(event: ChangeEvent<HTMLLabelElement>) {
        props.onCheck()
    }

    return (
        <div className={`${styles.taskBox}`}>
            <label className="label" onChange={actionCheckTask}>
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