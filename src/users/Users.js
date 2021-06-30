import {getUsers} from "../servises/API";
import {useEffect, useState} from "react";
import User from "../user/User";

export default function Users({fn}){
    const [users,setUsers] = useState([])

    useEffect(() => {
        getUsers().then(value => setUsers(value.data))
    },[])

    return(
        <div>
            {
                users.map(value => <User key={value.id} items={value} fn={fn}/>)
            }
        </div>
    )
}
