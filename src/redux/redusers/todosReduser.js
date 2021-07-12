import {ADD_TODOS, IS_LOADING_FALSE, IS_LOADING_TRUE, PUSH_NEW_TODO} from "./actionType/actionType";

const initialState = {
    todos:[],
    isLoading:false
}

export const todosReduser = (state = initialState, action) => {
    switch (action.type){
        case ADD_TODOS:{
            return {...state,todos: action.payload}}
        case IS_LOADING_TRUE:{
            return {...state,isLoading: true}}
        case IS_LOADING_FALSE:{
            return {...state,isLoading: false}}
        case PUSH_NEW_TODO:{
            return {...state, todos:[...state.todos, action.payload]}
        }
        default:
            return state
    }
}
