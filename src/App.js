import './App.css';
import Comments from "./comps/comments/Comments";
import Posts from "./comps/posts/Posts";
import Users from "./comps/users/Users";
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";

function App() {
  return (
      <Router>
      <div>
          <Link to={'/'}>To home page</Link><br/>
          <Link to={'/users'}>To users page</Link><br/>
          <Link to={'/posts'}>To posts page</Link><br/>
          <Link to={'/comments'}>To comments page</Link><br/>

          <Route path={'/users'} render={() => <Users/>}/>
          <Route path={'/posts'} component={Posts}/>

          <Route path={'/comments'}>
              <Comments/>
          </Route>

      </div>
      </Router>)
}

export default App;
