import "./VanDetail.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import { useEffect, useState } from "react";

function VanDetail() {
	const params = useParams();
	/**
	 * Challenge part 2:
	 * Using the endpoint set up (with mirage js), fetch the data
	 * for the van with the current ID from params.id. Log the data
	 * that comes back to the console.
	 *
	 * Hint: the endpoint is a GET request to `/api/vans/:vanid`
	 */

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
			<Nav />
			<div className='van-detail-cont'>
				<Link to='/vans'>
					<div className='back'>
						<img src='/leftArrow.svg' alt='back arrow icon' />
						<p>Back to all vans</p>
					</div>
				</Link>
				<div className='img-detail-cont'>
					<img src={van.imageUrl} alt='' />
					<i></i>
				</div>
			</div>
			<Footer />
		</>
	);
}
export default VanDetail;
