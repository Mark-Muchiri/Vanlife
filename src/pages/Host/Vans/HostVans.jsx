import { Link, useLoaderData } from "react-router-dom";
import "./HostVans.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

/**
 * TODO: Add defer and Await
 ** Refactor loader to to use defer
 ** Change the loader component naming
 ** Change the import name in `Routes` file
 ** conosle.log hostVans
 *
 *~ TBA: Changing `hostVans` name to `data`...
 *~ 			And more refactoting in `HostVans` file
 */

function HostVans() {
	const hostVans = useLoaderData();
	console.log(hostVans)
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
