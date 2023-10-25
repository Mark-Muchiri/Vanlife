import { Link } from "react-router-dom";
import "./404.css";

function four0four() {
	return (
		<>
			<div className='four-container'>
				<h1>Sorry, the page you were looking for was not found.</h1>
				<Link to='/'>
					<div className='home-button'>
						<p>Return to home</p>
					</div>
				</Link>
			</div>
		</>
	);
}

export default four0four;
