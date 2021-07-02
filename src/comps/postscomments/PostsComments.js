import {useEffect, useState} from "react";
import {getPostsComments} from "../../servises/api/API";
import PostComment from "../postcomment/PostComment";

export default function PostsComments({id}){

    let[postsComments, setPostsComments] = useState([])
    useEffect(()=>{
        getPostsComments(id).then(value => setPostsComments(value.data))
    },[])
    return(
        <div>
            {
                postsComments.map(value => <PostComment key={value.id} item={value}/>)
            }
        </div>
    )
}