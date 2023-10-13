import "./About.css";
import { Link } from "react-router-dom";

function About() {
	return (
		<>
			<main>
				<img className='abtimg' src='/Abt-img.png' alt='' />
				<div className='abt-title-cont'>
					<h2>Don’t squeeze in a sedan when you could relax in a van.</h2>
				</div>
				<div className='abt-p-cont'>
					<p>
						Our mission is to enliven your road trip with the perfect travel van
						rental. Our vans are recertified before each trip to ensure your
						travel plans can go off without a hitch. (Hitch costs extra 😉)
					</p>
					<br />
					<p>
						Our team is full of vanlife enthusiasts who know firsthand the magic
						of touring the world on 4 wheels.
					</p>
				</div>
				<div className='abt-card'>
					<p>Your destination is waiting. Your van is ready.</p>
					<Link to='/vans' className='explore-container'>
						<button className='explore'>
							<p>Explore our vans</p>
						</button>
					</Link>
				</div>
			</main>
		</>
	);
}
export default About;
