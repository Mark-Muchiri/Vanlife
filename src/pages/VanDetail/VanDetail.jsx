// Import the necessary CSS file and required hooks from React
import "./VanDetail.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function VanDetail() {
	// Extract the parameters from the URL
	const params = useParams();

	/**
	 * Challenge: modify the Link `to` prop below to send the user
	 * back to the previous page with the searchParams included, if
	 * they exist. (Remember we may not have anything in that state
	 * if there were no filters applied before coming to this
	 * van detail page, so make sure to "code defensively" to handle
	 * that case.)
	 */

	// State to hold the fetched data
	const [van, setVan] = useState([]);

	// useEffect to fetch data when the component mounts
	useEffect(() => {
		async function getVan() {
			// Fetch van data from the API based on the ID parameter
			const res = await fetch(`/api/vans/${params.id}`);
			const data = await res.json();
			setVan(data.vans);
		}
		// Call the getVan function to retrieve the van details
		getVan();
	}, [params.id]); // Watch for changes in the 'params.id' dependency

	return (
		<>
			<div className='van-detail-cont'>
				{/* Link to navigate back to the list of all vans */}
				<Link to='/vans'>
					<div className='back'>
						{/* Lazy loaded back arrow icon */}
						<LazyLoadImage
							effect='blur'
							src='/leftArrow.svg'
							alt={`back arrow icon`}
							width={`30px`}
						/>
						<p>Back to all vans</p>
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
						<i className={`van-type ${van.type} selected`}>{van.type}</i>
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
					<Link to='/vans'>
						<button className='rentvanbutton'>
							<p>Rent this van</p>
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default VanDetail;
