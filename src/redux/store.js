import {createStore} from 'redux'

import {todoReducer} from "./Todos/reducer"

export const store = createStore(todoReducer)

console.log("Entire data:" , store.getState())