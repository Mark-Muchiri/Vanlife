import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <p>Hello Homepage</p>
      <Link to='/about'>
        <button>About</button>
      </Link>
    </>
  );
}
export default App;