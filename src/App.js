import './App.css';
import Users from "./users/Users";
import Posts from "./posts/Posts";
import {useState} from "react";
import {getPosts} from "./servises/API";


function App() {
    let [index,setIndex] = useState(null)
    let fn = (userId)=> {getPosts(userId).then(value => setIndex(value))}


    console.log(index)
  return (
      <div>
        <Users fn={fn}/>
          <br/>

        {/*<Posts item={index}/>*/}
          <br/>
      </div>)
}

export default App;
