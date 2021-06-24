import {useEffect, useState} from "react";
import './Post.css';
import PostC from "../PostC/PostC";

export default function Posts(){
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromServer => {
                setPosts(postsFromServer);
            });
    },[]);

    return(
        <ul>
        {
            posts.map(post => <PostC key={post.id} item={post}/>)
        }
        </ul>
    )
}
