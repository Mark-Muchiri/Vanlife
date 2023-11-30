import { Await, Link, useLoaderData } from "react-router-dom";
import "./HostVans.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

/**
 * TODO: Add defer and Await
 ** Chnange `hostVans` const to `dataPromise`
 ** Create an Await custom element
 ** Create a resolve called 'dataPromise'
 ** Create an a callback function inside it
 ** Call the data inside the callback function `hostVans`
 ** Put all the javascript that uses the `hostVans` name inside the function
 ** Add a return inside the callback function
 ** Inside the callback function return the mark-up that will conditionally render
 */

function HostVans() {
	const dataPromise = useLoaderData();
	return (
		<>
			<Await resolve={dataPromise.hostVans}>
				{(hostVans) => {
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
				}}
			</Await>
		</>
	);
}

export default HostVans;
