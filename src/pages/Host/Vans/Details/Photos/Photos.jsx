import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import './Photos.css'

function Photos() {
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
			<div className='img-container-host'>
				<LazyLoadImage
					effect='blur'
					src={hostVanDetail.imageUrl}
					alt={`${hostVanDetail.name} image`}
					width={`103px`}
					height={`101.555px`}
				/>
			</div>
		</>
	);
}

export default Photos;
