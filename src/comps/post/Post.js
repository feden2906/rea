import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import PostsComments from "../postscomments/PostsComments";

export default function Post({item}){

    
    
    return(
        <Router>
        <div>
            <div>{item.id} - {item.title}</div>
            <div>{item.body}</div> - <Link to={'/posts/'+item.id+'/comments'}>Post comments</Link> -
            <Link to={'/'}>X</Link>
            <Route path={'/posts/'+item.id+'/comments'}>
                <PostsComments id={item.id}/>
            </Route>
        </div>
        </Router>
    )
}