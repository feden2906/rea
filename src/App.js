import './App.css';
import Users from "./users/Users";
import { getPostsByUserId } from "./servises/API";
import { useState } from "react";
import { Posts } from "./posts/Posts";

function App() {
  const [userPosts, setUserPosts] = useState([])

  const fn = (id) => {
    getPostsByUserId(id).then(({ data }) => setUserPosts(data))
  }

  return (
      <div>
        <Users fn={fn}/>
        <br/>
        <Posts posts={userPosts}/>
        <br/>
      </div>)
}

export default App;
