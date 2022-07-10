import React from 'react'
import TodoStore from './todo'
import AuthStore from './auth'

interface StoreProviderProps {
    store: RootStore,
    children: React.ReactNode
}

class RootStore {
    todoStore: TodoStore
    authStore: AuthStore

    constructor() {
        this.todoStore = new TodoStore(this)
        this.authStore = new AuthStore(this)
    }
}

const StoreContext = React.createContext<RootStore>(new RootStore())

const useStore = () => React.useContext<RootStore>(StoreContext)

const StoreProvider:React.FC<StoreProviderProps> = ({store, children}) => {
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

const store = new RootStore()

export {RootStore, useStore, StoreProvider, store}