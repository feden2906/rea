import {getUsersPosts} from "../../servises/api/API";
import {useEffect, useState} from "react";
import UserPost from "../userpost/UserPost";

export default function UsersPosts({id}){

    let[usersPosts, setUsersPosts] = useState([])

    useEffect(()=>{
    getUsersPosts(id).then(value =>setUsersPosts(value.data) )
    },[])
    return(
        <div>
            {
                usersPosts.map(value => <UserPost key={value.id} value={value}/> )
            }
        </div>
    )
}