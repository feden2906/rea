export default function Post({item}){
    
    
    
    return(
        <div>
            <div>{item.id} - {item.title}</div>
            <div>{item.body}</div>
        </div>
    )
}