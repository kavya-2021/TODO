import {ADD_TODO_LOADING, ADD_TODO_SUCCESS,GET_TODO_LOADING, GET_TODO_SUCCESS} from './actionTypes'

export const addTodoLoading = () =>({
    type:ADD_TODO_LOADING
})

export const addTodoSuccess = () =>({
    type:ADD_TODO_SUCCESS
})

export const getTodoLoading = () =>({
    type:GET_TODO_LOADING
})

export const getTodoSuccess = (payload) =>({
    type:GET_TODO_SUCCESS,
    payload
})