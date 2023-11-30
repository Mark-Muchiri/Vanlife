// Import the necessary CSS file and required hooks from React
import "./VanDetail.css";
import { Await, Link, useLoaderData, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function VanDetail() {
	// Access the current location using the useLocation hook
	const location = useLocation();
	// State to hold the fetched data
	const dataPromise = useLoaderData();

	// Extract the search parameters from the location state
	const search = location.state?.search || "";
	const type = location.state?.type || "all";

	return (
		<>
			<Await resolve={dataPromise.vanDetails}>
				{(van) => {
					return (
						<>
							<div className='van-detail-cont'>
								{/* Link to navigate back to the list of all vans.
				Without loosing the filter parameters selected */}
								<Link to={`..${search}`} relative='path'>
									<div className='back'>
										{/* Lazy loaded back arrow icon */}
										<LazyLoadImage
											effect='blur'
											src='/leftArrow.svg'
											alt={`back arrow icon`}
											width={`30px`}
										/>
										<p>Back to {type} vans</p>
									</div>
								</Link>
								{/* Container for the van details */}
								<div className='img-detail-cont'>
									{/* Lazy loaded image of the van */}
									<LazyLoadImage
										effect='blur'
										src={van.imageUrl}
										alt={`${van.name} image`}
										height={`367px`}
										width={`100%`}
									/>
									{/* Container for the van type */}
									<div className='vantype-container'>
										<i className={`van-type ${van.type} selected`}>
											{van.type}
										</i>
									</div>
									{/* Heading for the van name */}
									<h1>{van.name}</h1>
									{/* Container for the van price */}
									<div className='van-detail-price'>
										<p>${van.price}</p>
										<span>/day</span>
									</div>
									{/* Container for the van description */}
									<div className='van-description'>
										<p>{van.description}</p>
									</div>
									{/* Link to rent the van */}
									<Link to='.'>
										<button className='rentvanbutton'>
											<p>Rent this van</p>
										</button>
									</Link>
								</div>
							</div>
						</>
					);
				}}
			</Await>
		</>
	);
}

export default VanDetail;
