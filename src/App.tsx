import { useState } from 'react'
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

  const tasksList: tasksObjects[] = [
    // {
    //   text: "testando",
    //   id:1
    // }
  ]

  return (
    <>
      <Header/>
      <div className='wrapper'>
        <form className={styles.formInsetTodo}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
                />
            <button type="submit">Criar <PlusCircle size={20} weight="bold"/></button>
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
