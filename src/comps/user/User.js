import UsersPosts from "../usersposts/UsersPosts";
import { Link, Route } from "react-router-dom";

export default function User({item}) {

    return (
            <div>
                {item.id} - {item.name} - <Link to={'/users/' + item.id + '/posts'}>User posts</Link> -
                <Link to={'/users'}>X</Link>
                <Route path={'/users/'+item.id+'/posts'}>
                    <UsersPosts id={item.id}/>
                </Route>
            </div>
    )
}
