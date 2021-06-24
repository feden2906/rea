export default function UserC (props){
    let{item} = props
    return(<div key = {item.id} >
        <h2>{item.name}</h2>
        <p>{item.username}</p>
        <p>{item.address.city}</p>
    </div>)
}