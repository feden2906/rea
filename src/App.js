import './App.css';

import {CreateTodoForm} from "./coponents/createTodoForm";
import TodosList from "./coponents/TodosList";

function App() {
    return (
        <div>
            <CreateTodoForm/>
            <TodosList/>
        </div>)
}

export default App;
