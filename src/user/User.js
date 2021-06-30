export default function User({items, fn}){

    return(
        <div>
            {items.id} - {items.name} - <button onClick={
            ()=> fn(items.id)
        }>Post</button>
        </div>
    )
}