import { useState } from 'react'
import { Header } from './Header'
import styles from "./app.module.css"
import { PlusCircle } from 'phosphor-react'

function App() {
  const [count, setCount] = useState(0)

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
      </div>
    </>
  )
}

export default App
