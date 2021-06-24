export default function (props){
    let {item:post} = props
    return(<li key={post.id}>
        <p>{post.userId}.{post.id}</p>
        <h2>{post.title}</h2>
        <h3>{post.body}</h3>
    </li>)
}