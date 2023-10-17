import { Link } from "react-router-dom";
import './HostVans.css'

function HostVans() {
  const rand = Math.random();
  const numb = Math.ceil(rand * 100)
	return (
		<>
      <h2>Vans</h2>
      <h2>
        <Link to={`/host/vans/${numb}`}>
          <p>Host Van Detail</p>
        </Link>
      </h2>
		</>
	);
}

export default HostVans;
