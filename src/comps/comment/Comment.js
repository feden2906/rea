export default function Comment({item}){



    return(
        <div>
            <div>{item.id} - {item.name}</div>
            <div>{item.body}</div>
        </div>
    )
}