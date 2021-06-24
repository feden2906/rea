import {useEffect, useState} from "react";
import './User.css'
import UserC from "./UserC";

export default function Users(){

    let [users, setUsers] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(usersFromServer => {
                setUsers(usersFromServer)
            })
    },[])
    return(
        <div>
            {
              users.map(user => <UserC item={user}/> )
            }
        </div>
    )
}