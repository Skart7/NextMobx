import { makeAutoObservable } from "mobx"
import { RootStore } from "./store"
import { v4 as uuidv4 } from 'uuid'

export interface TodoItem {
    id: string,
    title: string,
    isDone: boolean,
}


class TodoStore {
    rootStore: RootStore
    items: Array<TodoItem> = []

    constructor(rootStore:RootStore) {
        this.rootStore = rootStore
        makeAutoObservable(this)
    }

    createTodo(title:string) {
        this.items.push({
            id: uuidv4(),
            title: title,
            isDone: false
        })
    }
    deleteTodo(todo:TodoItem) {
        this.items = this.items.filter(item => item.id !== todo.id)
    }
    isDoneTodo(todo:TodoItem) {
        todo.isDone = true
    }

}
export default TodoStore