import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>Hello Home page</p>
      <Link to='/about'>
        <button>About page</button>
      </Link>
    </>
  );
}
export default Home;