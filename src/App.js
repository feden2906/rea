import './App.css';
import Users from "./users/Users";


function App() {
    let fn = (id)=>console.log(id)

  return (
      <div>
        <Users fn={fn}/>
          <br/>

          <br/>
      </div>)
}

export default App;
