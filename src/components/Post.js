import {useEffect, useState} from "react";
import './Post.css'
import PostC from "./PostC";
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
            posts.map(post => <PostC item={post}/>)
        }
        </ul>
    )
}