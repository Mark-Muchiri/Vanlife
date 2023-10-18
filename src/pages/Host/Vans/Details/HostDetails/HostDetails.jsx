import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./HotDetails.css";

function HostDetails() {
	// Extracting URL parameters
	const params = useParams();

	// state that holds fetched data
	const [hostVanDetail, setHostVanDetail] = useState([]);

	// useEffect to fetch data when the component mounts,
	// or when params.id changes
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
		// Calling the getVans function when the component mounts,
		// or when params.id changes
		getVans();
	}, [params.id]);
	return (
		<>
			<p className='host-vans-description'>
				Name: <span>{hostVanDetail.name}</span>
			</p>
			<p className='host-vans-description'>
				Category: <span>{hostVanDetail.type}</span>
			</p>
			<p className='host-vans-description'>
				Description: <span>{hostVanDetail.description}</span>
			</p>
			<p className='host-vans-description'>
				Visibility: <span>{`Public`}</span>
			</p>
		</>
	);
}

export default HostDetails;
