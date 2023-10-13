import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
	return (
		<>
			{/* Main */}
			<main>
				{/* image */}
				<div className='homecontainer'>
					<img className='homeimg' src='/vanlifehome.png' />
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
