import DeleteTodo from "./DeleteTodo";

export default function SingleTodo({dispatch,item:value}){

    return(<div>
        <h4>{value.title}</h4>
        <p>{value.description}</p>
        <p>{value.id}</p>
        <hr/>
        <DeleteTodo dispatch={dispatch} item={value}/>
        <hr/>
    </div>)
}