import UsersPosts from "../usersposts/UsersPosts";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

export default function User({item}) {


    return (
        <Router>
            <div>
                {item.id} - {item.name} - <Link to={'/users/' + item.id + '/posts'}>User posts</Link> -
                <Link to={'/'}>X</Link>
                <Route path={'/users/'+item.id+'/posts'}>
                    <UsersPosts id={item.id}/>
                </Route>
            </div>
        </Router>
    )
}