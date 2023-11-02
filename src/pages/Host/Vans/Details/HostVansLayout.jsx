// Importing necessary components and styles
import "./HostVansLayout.css";
import { useEffect, useState } from "react";
import {
	Link,
	NavLink,
	Outlet,
	useParams,
} from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
	const [ hostVanDetail, setHostVanDetail ] = useState([]);
	
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
				<Link to='..' relative='path'>
					<div className='back-host-vandetail'>
						<LazyLoadImage
							effect='blur'
							src='/leftArrow.svg'
							alt={`back arrow icon`}
							width={`30px`}
						/>
						<p>Back to all vans</p>
					</div>
				</Link>
			</div>
			{/* van image && text */}
			<div className='host-detail-container'>
				<div className='image-text'>
					<LazyLoadImage
						effect='blur'
						src={hostVanDetail.imageUrl}
						alt={`van image`}
						width={`160.15px`}
						height={`157.903px`}
					/>
					<div className='text'>
						<div className='vantype-container'>
							<i
								className={`van-type ${hostVanDetail.type} selected`}
							>
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
							style={({ isActive }) =>
								isActive ? activeStyle : null
							}
							className='link'
							to={`.`}
							end
						>
							Details
						</NavLink>
						<NavLink
							style={({ isActive }) =>
								isActive ? activeStyle : null
							}
							className='link'
							to={`pricing`}
						>
							Pricing
						</NavLink>
						<NavLink
							style={({ isActive }) =>
								isActive ? activeStyle : null
							}
							className='link'
							to={`photos`}
						>
							Photos
						</NavLink>
					</ul>
				</div>
				<br />
				{/* Children components */}
				<Outlet context={[hostVanDetail, setHostVanDetail]} />
			</div>
		</>
	);
}
/**
 * Challenge: check out the docs linked in the slide, and see if you
 * can implement the Outlet Context feature it talks about.
 *
 * Part of this challenge will require you to (finally) build out those
 * nested components. Again, if you don't need CSS practice, you can
 * skip the styling part, and I'll handle that for you.
 */
export default HostVansID;
