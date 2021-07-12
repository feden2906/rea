import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { IS_LOADING_FALSE, IS_LOADING_TRUE, PUSH_NEW_TODO } from "../redux/redusers/actionType/actionType";



export const CreateTodoForm = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(({todosReduser: {isLoading}}) => isLoading);

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const onTodoCreate = (title, description) => {
        return fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title || !description) return;
        try{
            dispatch({type: IS_LOADING_TRUE});

            const data = await (await onTodoCreate( title, description)).json();

            dispatch({ type: PUSH_NEW_TODO, payload: data })

            setTitle('')
            setDescription('')
        }catch (e){
            console.log(e)
        }finally {
            dispatch({type: IS_LOADING_FALSE})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="title"
                   value={title}
                   onChange={({target:{value}}) =>setTitle(value)}/><br/>
            <input type="text"
                   placeholder="description"
                   value={description}
                   onChange={({target:{value}})=>setDescription(value)} /><br/>
            <button type="submit" disabled={!title || !description || isLoading}>create todo</button>
        </form>
    )
}
