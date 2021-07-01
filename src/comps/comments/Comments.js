import {getComment} from "../../servises/api/API";
import {useEffect, useState} from "react";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getComment().then(value => setComments(value.data));
    }, [])


    return (
        <div>
            {
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
        </div>
    )
}