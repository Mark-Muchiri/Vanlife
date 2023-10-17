// Importing necessary components and styles
import "./HostVansDetail.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// Defining the functional component HostVansID
function HostVansID() {
	// Extracting URL parameters
	const params = useParams();

	// state that holds fetched data
	const [hostVanDetail, setHostVanDetail] = useState([]);

	// useEffect to fetch data when the component mounts or when params.id changes
	useEffect(() => {
		// async function to fetch data from the API
		async function getVans() {
			// Fetching data using the parameter id
			const res = await fetch(`/api/host/vans/${params.id}`);
			// Parsing the response to JSON format
			const data = await res.json();
			// Updating the state with the fetched van detail
			setHostVanDetail(data.vans[0]);
		}
		// Calling the getVans function when the component mounts or when params.id changes
		getVans();
	}, [params.id]);

	// Returning the JSX elements to be rendered
	return (
		<>
			<div className='image-text'>
				<img src='' alt='van image' />
				<div className='text'>
					<h2>{hostVanDetail.name}</h2>
				</div>
			</div>
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
