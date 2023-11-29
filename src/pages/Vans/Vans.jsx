// Import necessary CSS file and required hooks from React
import "./Vans.css";
import { useState } from "react";
import { Await, Link, useLoaderData, useSearchParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

/**
 * Challenge: Implement Await.
 * This code is a bit more complex than the simple Weather app, so
 * there's a bit more to consider and shift around this time. Give
 * it your best shot, and then we'll see a couple different ways
 * we could accomplish this task.
 */

function Vans() {
	const [error] = useState(null);
	// Using useSearchParams hook to access the URL search parameters
	const [searchParams, setSearchParams] = useSearchParams();
	// Loading data
	const dataPromise = useLoaderData();
	// Extracting the 'type' filter from the URL query parameters
	const typeFilter = searchParams.get("type");

	// Function to handle changes in the filter parameters
	//~ Compatible for multiple filter inputs
	function handleFilterChange(key, value) {
		setSearchParams((prevParams) => {
			if (value === null) {
				prevParams.delete(key);
			} else {
				prevParams.set(key, value);
			}
			return prevParams;
		});
	}

	// An array of filter options with corresponding colors
	const filter = ["Simple", "Luxury", "Rugged"];
	/* Using the 'map' function to iterate through each 
filter item and create corresponding filter buttons */
	const filterCards = filter.map((filterItem, index) => (
		<div
			/* Adding an onClick event to each filter button,
    triggering the handleFilterChange function */
			onClick={() => handleFilterChange("type", `${filterItem.toLowerCase()}`)}
			// Applying dynamic CSS class based on the selected filter item
			className={`filter-button ${
				typeFilter === `${filterItem.toLowerCase()}` ? "active" : ""
			}`}
			key={index}
		>
			<p>{filterItem}</p>
		</div>
	));

	// error handler
	if (error) {
		return <h1>There was an error: {error.message}</h1>;
	}

	// Uses Await ( from React-Router-Dom ) to render the data
	function renderVanElements(data) {
		// Filter function to display characters based on the filter
		const displayedCharacters = typeFilter
			? data.filter((char) => char.type.toLowerCase() === typeFilter)
			: data;

		// Map the data through cards and utilize lazy loading for the images
		const vanElements = displayedCharacters.map((van) => (
			<div key={van.id} className='van-tile'>
				{/* Holds the url state for vanDetail back button */}
				<Link
					to={van.id}
					state={{
						search: `?${searchParams.toString()}`,
						type: typeFilter,
					}}
				>
					{/* Utilize LazyLoadImage component with necessary attributes */}
					<LazyLoadImage
						effect='blur'
						src={van.imageUrl}
						alt={van.name}
						width={`100%`}
					/>
					<div className='van-info'>
						<h3>{van.name}</h3>
						<div className='van-price'>
							<p>${van.price}</p>
							<span>/day</span>
						</div>
					</div>
					<div className='button-position'>
						<i className={`van-type ${van.type} selected`}>{van.type}</i>
					</div>
				</Link>
			</div>
		));

		return (
			<>
				<div className='filters'>
					{filterCards}
					{typeFilter ? (
						<div
							onClick={() => handleFilterChange("type", null)}
							className='clear-cont'
						>
							<p>Clear Filters</p>
						</div>
					) : null}
				</div>
				{/* Vans data section */}
				<div className='van-list-container'>
					<div className='van-list'>{vanElements}</div>
				</div>
			</>
		);
	}

	return (
		<>
			<main className='vans-margin'>
				<h1>Explore our van options</h1>
				{/* Filters with dynamic display of active 
				filters and clearing functionality */}
				{/* Await function */}
				<Await resolve={dataPromise.vans}>{renderVanElements}</Await>
			</main>
		</>
	);
}

export default Vans;
