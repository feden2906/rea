import {useEffect} from "react";

import {useSelector} from "react-redux";
import {ADD_TODOS, IS_LOADING_FALSE, IS_LOADING_TRUE} from "../redux/redusers/actionType/actionType";
import SingleTodo from "./singleTodo";


export default function TodosList({dispatch}) {

    const {todos, isLoading} = useSelector(({todosReduser}) => todosReduser)
    console.log(isLoading)
    useEffect(() => fetchTodos()
    , [])
    const fetchTodos = async () => {
        try {
            dispatch({type:IS_LOADING_TRUE})
            const response = await fetch('http://localhost:8888/get-todos');
            const data = await response.json();
            dispatch({type: ADD_TODOS, payload: data})
            dispatch({type:IS_LOADING_FALSE})
        } catch (e) {
            console.log(e)
        } finally {

        }
    }
    if(isLoading) return <h1>LOADING.......</h1>
    return (
        <div>
            {
                todos.map(value => <SingleTodo key={value.id} dispatch={dispatch} item={value}/>)
            }
        </div>
    )
}
