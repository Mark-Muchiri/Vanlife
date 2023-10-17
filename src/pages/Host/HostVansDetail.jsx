import './HostVansDetail.css'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function HostVansID() {
	const params = useParams();

	// state that holds fetched data
	const [hostVanDetail, setHostVanDetail] = useState([]);
	// useEffect to fetch data when the component mounts
	useEffect(() => {
		async function getVans() {
			const res = await fetch(`/api/host/vans/${params.id}`);
			const data = await res.json();
			setHostVanDetail(data.vans[0]);
		}
		getVans();
	}, [params.id]);
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
