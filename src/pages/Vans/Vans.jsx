import "./Vans.css";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Vans() {
	// State to hold the fetched data
	const [data, setData] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const typeFilter = searchParams.get("type");

	// useEffect to fetch data when the component mounts
	useEffect(() => {
		async function getVans() {
			const res = await fetch("/api/vans");
			const data = await res.json();
			setData(data.vans);
		}
		getVans();
	}, []);

	// This function is very useful when adding multiple filter params
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

	// Map through filter buttons
	const filter = ["Simple", "Luxury", "Rugged"];
	const filterCards = filter.map((filterItem, index) => (
		<div
			onClick={() => handleFilterChange("type", `${filterItem.toLowerCase()}`)}
			className='filter-button'
			key={index}
		>
			<p>{filterItem}</p>
		</div>
	));

	// Filter function
	const displayedCharacters = typeFilter
		? data.filter((char) => char.type.toLowerCase() === typeFilter)
		: data;

	// Map the data through cards
	const vanElements = displayedCharacters.map((van) => (
		<div key={van.id} className='van-tile'>
			<Link to={`/vans/${van.id}`}>
				{/* Define the width and height inline */}
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
			<main className='vans-margin'>
				<h1>Explore our van options</h1>
				{/* Filters */}
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
				{/* Vans data */}
				<div className='van-list-container'>
					<div className='van-list'>{vanElements}</div>
				</div>
			</main>
		</>
	);
}
export default Vans;
