// Importing necessary components and styles
import "./HostVansLayout.css";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";

// Defining the functional component HostVansID
function HostVansID() {
	const activeStyle = {
		all: "unset",
		textDecoration: "underline",
		fontFamily: "Inter",
		fontWeight: "900",
		color: "#df8b37",
		cursor: "pointer",
	};
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

	// Returning the JSX elements to be rendered
	return (
		<>
			{/* Back to all vans */}
			<div className='all-vans-container'>
				<Link to='/vans'>
					<div className='back'>
						<img src='/leftArrow.svg' alt='back arrow icon' />
						<p>Back to all vans</p>
					</div>
				</Link>
			</div>
			{/* van image && text */}
			<div className='host-detail-container'>
				<div className='image-text'>
					<img src={hostVanDetail.imageUrl} alt='van image' />
					<div className='text'>
						<div className='vantype-container'>
							<i className={`van-type ${hostVanDetail.type} selected`}>
								{hostVanDetail.type}
							</i>
						</div>
						<div className='name-rates'>
							<h2>{hostVanDetail.name}</h2>
							<p className='rates'>
								<p className='cost'>${hostVanDetail.price}</p>
								<span>/day</span>
							</p>
						</div>
					</div>
				</div>
				{/* navs */}
				<div className='host-van-pages'>
					<ul>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : null)}
							className='link'
							to={`/`}
							// to={`/host/vans/${hostVanDetail.id}`}
						>
							Details
						</NavLink>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : null)}
							className='link'
							to={`/`}
						>
							Pricing
						</NavLink>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : null)}
							className='link'
							to={`/`}
						>
							Photos
						</NavLink>
					</ul>
				</div>
			</div>
			{/* Children components */}
			<Outlet />

			<h2>
				<Link to={`/host/vans`}>
					<p>Back to Host Van</p>
				</Link>
			</h2>
		</>
	);
}

export default HostVansID;
