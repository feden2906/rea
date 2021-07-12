import {
    ADD_TODOS,
    CHANGE_STATUS,
    DELETE_TODO,
    IS_LOADING_FALSE,
    IS_LOADING_TRUE,
    PUSH_NEW_TODO
} from "./actionType/actionType";

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
        case DELETE_TODO:{
            const newArray = state.todos.filter(value => value.id !== action.payload)
            return {...state, todos:[...newArray]}
        }
        case CHANGE_STATUS:{
            state.todos.find(value => value.id === action.payload).completed = true;
            return {...state, todos:[...state.todos]}
        }
        default:
            return state
    }
}
