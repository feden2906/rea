import { DELETE_TODO } from "../redux/redusers/actionType/actionType";
import { useDispatch } from "react-redux";

export default function DeleteTodo({item}) {
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault()
        dispatch({type: DELETE_TODO, payload: item.id})
        await fetch(('http://localhost:8888/delete-todo/' + item.id), {
            method: 'DELETE'
        })
    }

    return (
        <div>
            <form onSubmit={handleDelete}>
                <button type={"submit"}>delete todo</button>
            </form>
        </div>
    )
}
