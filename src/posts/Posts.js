import {useEffect, useState} from "react";
import {getPosts} from "../servises/API";
import Post from "../post/Post";

export default function Posts({index}){

    let [posts,setPosts]=useState([]);
    useEffect(()=>{
        getPosts().then(value => setPosts(value.data))
    },[])

    return(
        <div>
            {
                posts.map(value => <Post index={index} key={value.id} item={value}/>)
            }
        </div>
    )
}