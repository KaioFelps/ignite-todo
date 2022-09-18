import { ChangeEvent, FormEvent, useState } from 'react'
import { Header } from './Header'
import styles from "./app.module.css"
import { PlusCircle } from 'phosphor-react'
import { Task } from "./Task"
import { Notask } from './noTask'

function App() {

  type tasksObjects = {
    text: string;
    id: number;
  }

  const [taskListText, setTaskListText] = useState<string>("")
  const [tasksList, setTasksList] = useState<tasksObjects[]>([])

  function updateTaskListText(event: ChangeEvent<HTMLInputElement>) {
    const text = event.target.value
    setTaskListText(text)
  }

  function actionAddNewTodo(event: FormEvent) {
    event.preventDefault()

    const newTasklistObject: tasksObjects = {
      text: taskListText,
      id: tasksList.length + 1
    }

    if (taskListText !== "" && taskListText !== " ") {
      setTasksList(oldTaskList => [...oldTaskList, newTasklistObject])
      setTaskListText("")
    }
  }

  function verifyFirstChar() {
    if (taskListText[0] === " ") setTaskListText("")
  }

  return (
    <>
      <Header/>
      <div className={styles.wrapper}>
        <form className={styles.formInsetTodo}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                onChange={updateTaskListText}
                value={taskListText}
                onKeyDown={verifyFirstChar}
                onKeyUp={verifyFirstChar}
                required = {true}
                />
            <button onClick={actionAddNewTodo} disabled={taskListText[0] === "" || taskListText[0] === " " || taskListText.length === 0 ? true : false} type="submit">Criar <PlusCircle size={20} weight="bold"/></button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.header}>
            <div className={styles.title}>
              Tarefas Criadas
              <span className={styles.tasksCounter}>2</span>
            </div>
            <div className={`${styles.title} ${styles.purple}`}>
              Concluídas
              <span className={styles.tasksCounter}>0 de 2</span>
            </div>
          </div>

          <div className={styles.tasksWrapper}>
            { tasksList.length !== 0 ?
            tasksList.map(task => <Task key={task.id} text={task.text} />) : <Notask/> }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
