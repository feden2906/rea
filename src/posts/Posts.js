import { Post } from "../post/Post";

export const Posts = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
}
