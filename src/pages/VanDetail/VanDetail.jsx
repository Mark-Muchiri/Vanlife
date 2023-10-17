import "./VanDetail.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function VanDetail() {
	const params = useParams();

	// State to hold the fetched data
	const [van, setVan] = useState([]);
	// useEffect to fetch data when the component mounts
	useEffect(() => {
		async function getVan() {
			const res = await fetch(`/api/vans/${params.id}`);
			const data = await res.json();
			setVan(data.vans);
		}
		getVan();
	}, [params.id]);

	return (
		<>
			<div className='van-detail-cont'>
				<Link to='/vans'>
					<div className='back'>
						<LazyLoadImage
							effect='blur'
							src='/leftArrow.svg'
							alt={`back arrow icon`}
						/>
						<p>Back to all vans</p>
					</div>
				</Link>
				<div className='img-detail-cont'>
					<LazyLoadImage
						effect='blur'
						src={van.imageUrl}
						alt={`${van.name} image`}
					/>
					<div className='vantype-container'>
						<i className={`van-type ${van.type} selected`}>{van.type}</i>
					</div>
					<h1>{van.name}</h1>
					<div className='van-detail-price'>
						<p>${van.price}</p>
						<span>/day</span>
					</div>
					<div className='van-description'>
						<p>{van.description}</p>
					</div>
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
