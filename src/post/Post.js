export const Post = ({post}) => {
    return (
        <div>
            <p><b>{post.title}</b> --------- користувач №{post.userId} / пост №{post.id}</p>
            <p>{post.body}</p>
        </div>
    );
}
