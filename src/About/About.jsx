import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <p>About page</p>
      <Link to='/'>
        <button>Home page</button>
      </Link>
    </>
  );
}
export default About;