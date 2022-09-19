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
    isChecked: boolean
  }

  const [taskListText, setTaskListText] = useState<string>("")
  const [tasksList, setTasksList] = useState<tasksObjects[]>([])
  const [concludedTasks, setConcludedTasks] = useState<number>()

  function updateTaskListText(event: ChangeEvent<HTMLInputElement>) {
    const text = event.target.value
    setTaskListText(text)
  }

  function actionAddNewTodo(event: FormEvent) {
    event.preventDefault()

    const newTasklistObject: tasksObjects = {
      text: taskListText,
      id: tasksList.length + 1,
      isChecked: false,
    }

    if (taskListText !== "" && taskListText !== " ") {
      setTasksList(oldTaskList => [...oldTaskList, newTasklistObject])
      setTaskListText("")
    }
  }

  function verifyFirstChar() {
    if (taskListText[0] === " ") setTaskListText("")
  }

  function deleteTask(id: number) {
    setTasksList(oldTasks => oldTasks.filter(task => task.id !== id))
  }

  function checkIt(isChecked: boolean) {
    const actived = document.querySelectorAll(".label input")
    let howManyActiveds = [];
    for (let active of actived) {
      if((active as HTMLInputElement).checked == true) howManyActiveds.push(active)
    }

    setConcludedTasks(howManyActiveds.length)
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
              <span className={styles.tasksCounter}>{tasksList.length}</span>
            </div>
            <div className={`${styles.title} ${styles.purple}`}>
              Concluídas
              <span className={styles.tasksCounter}>{concludedTasks || 0} de {tasksList.length}</span>
            </div>
          </div>

          <div className={styles.tasksWrapper}>
            { tasksList.length !== 0 ?
            tasksList.map(task => <Task
                                    key={task.id}
                                    id={task.id}
                                    onDelete={deleteTask}
                                    onCheck={checkIt}
                                    text={task.text}
                                    />) : <Notask/> }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
