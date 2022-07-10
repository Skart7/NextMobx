import React from 'react'
import { useStore } from '../../../mobx/store'

import styles from '../../../styles/Home.module.css'

const TextField: React.FC = () => {

    const {todoStore} = useStore()
    const [title, setTitle] = React.useState("")
    const [loading, setLoading] = React.useState(false)

    const onChangeTitle = (e:React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)

    const onCreateTodo = () => {
      setLoading(true)
      if(title || title.length > 2) {
        todoStore.createTodo(title)
        setTitle("")
      }
      setLoading(false)
    }

    if(loading) return <div>loading...</div>

    return (
      <div className={styles.createTodo}>
        <input type="text" name="create-todo" placeholder="New Todo" value={title} onChange={onChangeTitle} />
        <button role="button" onClick={onCreateTodo}>Create</button>
      </div> 
    )
}

export default TextField