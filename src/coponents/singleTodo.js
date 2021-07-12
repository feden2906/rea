import DeleteTodo from "./DeleteTodo";
import { useDispatch } from "react-redux";
import { CHANGE_STATUS } from "../redux/redusers/actionType/actionType";

export default function SingleTodo({ item }) {
  const dispatch = useDispatch();

  const onTodoUpdate = () => {
    return fetch('http://localhost:8888/update-todo/' + item.id, {
      method: 'PATCH',
      body: JSON.stringify({ completed: true }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  const statusHandler = async () => {
    dispatch({ type: CHANGE_STATUS, payload: item.id });
    await onTodoUpdate()
  }

  return (
      <div>
        <h4>title: {item.title}</h4>
        <p>description: {item.description}</p>
        <p>completed: {item.completed.toString()}</p>
        <hr/>
        <DeleteTodo item={item}/>
        {
          !item.completed && <button onClick={statusHandler}>Change status</button>
        }
        <hr/>
      </div>
  )
}
