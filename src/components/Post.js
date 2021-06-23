import {useEffect, useState} from "react";
import './Post.css'
export default function Posts(){

    let [posts,setPosts] = useState([]);

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
            posts.map(post => <li key={post.id}>
                <p>{post.userId}.{post.id}</p>
                <h2>{post.title}</h2>
                <h3>{post.body}</h3>
            </li>)
        }
        </ul>
    )
}