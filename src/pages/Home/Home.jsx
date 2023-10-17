import "./Home.css";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Home() {
	return (
		<>
			{/* Main */}
			<main>
				{/* image */}
				<div className='homecontainer'>
					<LazyLoadImage
						className='homeimg'
						effect='blur'
						src='/vanlifehome.png'
						alt={`A mountain over a lake`}
						width={`100%`}
						height={`350px`}
					/>
					{/* <img className='homeimg' src='/vanlifehome.png' /> */}
					{/* Hero text */}
					<p className='herotxt'>
						You got the travel plans, we got the travel vans.
					</p>
					<p className='herosubtxt'>
						Add adventure to your life by joining the #vanlife movement. Rent
						the perfect van to make your perfect road trip.
					</p>
					<Link to='/vans'>
						<button className='findvanbutton'>
							<p>Find your van</p>
						</button>
					</Link>
				</div>
			</main>
		</>
	);
}
export default Home;
