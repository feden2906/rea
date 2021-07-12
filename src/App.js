import './App.css';

import {CreateTodoForm} from "./coponents/createTodoForm";
import TodosList from "./coponents/TodosList";
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch()

    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;
        const response = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        dispatch({type:'PUSH_NEW_TODO', payload:data})
        console.log(data)
    }

    return (
        <div>
            <CreateTodoForm item={onTodoCreate}/>
            <TodosList dispatch={dispatch} />
        </div>)
}

export default App;
