import { Link, useParams } from "react-router-dom";

function HostVansID() {
	const params = useParams();
	return (
		<>
			<h2>Host Van Detail Page {params.id}</h2>
			<h2>
				<Link to={`/host/vans`}>
					<p>Host Van</p>
				</Link>
			</h2>
		</>
	);
}

export default HostVansID;
