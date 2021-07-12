import './App.css';
import {useSelector} from "react-redux";

function App() {
    const store = useSelector(state => state)
    console.log(store)
  return (
      <div>

      </div>)
}

export default App;
