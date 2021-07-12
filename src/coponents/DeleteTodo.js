import {DELETE_TODO} from "../redux/redusers/actionType/actionType";

export default function DeleteTodo({item,dispatch}) {


    const handleDelete = async (e) => {
        const response = await fetch(('http://localhost:8888/delete-todo/' + item.id), {
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