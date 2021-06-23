import {useEffect, useState} from "react";
import './User.css'

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
              users.map(user => <div key = {user.id} >
                  <h2>{user.name}</h2>
                  <p>{user.username}</p>
                  <p>{user.address.city}</p>
              </div> )
            }
        </div>
    )
}