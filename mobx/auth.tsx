import { makeAutoObservable } from "mobx"
import { RootStore } from "./store"

class AuthStore {
    rootStore: RootStore
    name:string = "Skart7"

    constructor(rootStore:RootStore) {
        this.rootStore = rootStore
        makeAutoObservable(this)
    }
    
    onChangeName(name:string) {
        this.name = name
    }
}
export default AuthStore