import React from 'react'

import styles from '../../../styles/Home.module.css'
import { useStore } from '../../../mobx/store'
import { observer } from 'mobx-react-lite'
import { TodoItem } from '../../../mobx/todo'


const TodoWrapper:React.FC = observer(() => {

    const {todoStore} = useStore()    

    const onComplete = (obj:TodoItem) => todoStore.isDoneTodo(obj)
    
    const onDelete = (obj:TodoItem) => todoStore.deleteTodo(obj)
    console.log(todoStore)

    return (
    <>
        {
        todoStore.items.length > 0 ? 
        <div className={styles.wrapperTodo}>
        {
          todoStore.items.map(obj => (
          <div className={styles.card} key={obj.id}>
            <div className={styles.leftContent}>
                <div>
                <p className={styles.caption}>Identificate:</p>
                <p className={styles.text}>{obj.id}</p>
                </div>
                <div> 
                <p className={styles.caption}>Title:</p>
                <p className={styles.text}>{obj.title}</p>
                </div>
            </div>
            <div className={styles.rightContent}>
                <button 
                    className={`${styles.success} ${obj.isDone ? styles.isDone : ""}`} 
                    onClick={() => onComplete(obj)}
                    disabled={obj.isDone}
                >is-done</button>
                <button className={styles.danger} onClick={() => onDelete(obj)}>delete</button>
            </div>
            </div>
            ))
            }
        </div>
      : <div>Todo List is empty :/</div>
        }
    </>
    )
})

export default TodoWrapper