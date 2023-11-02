import { Link } from "react-router-dom";
import "./HostVans.css";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HostVans() {
	const [ hostVans, setHostVans ] = useState([]);
	// useEffect to fetch data when the component mounts
	useEffect(() => {
		async function getVans() {
			const res = await fetch("/api/host/vans");
			const data = await res.json();
			setHostVans(data.vans);
		}
		getVans();
	}, []);
	// Map through the vans data
	const ListedVans = hostVans.map((van) => (
		<div key={van.hostId} className='hostvancont'>
			<Link to={van.id}>
				<div className='hostvancard'>
					<LazyLoadImage
						effect='blur'
						src={van.imageUrl}
						alt={`van image`}
						width={`65.877px`}
						height={`65.877px`}
					/>
					{/* <img src={van.imageUrl} alt='van image' /> */}
					<div className='details'>
						<h3>{van.name}</h3>
						<p>
							${van.price}
							<span>/day</span>
						</p>
					</div>
				</div>
			</Link>
		</div>
	));
	return (
		<>
			<h2>Your listed vans</h2>
			<br />
			{ListedVans}
		</>
	);
}

export default HostVans;
