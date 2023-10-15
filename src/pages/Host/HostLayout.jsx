import { Outlet, Link } from "react-router-dom";
import "./HostLayout.css";

function HostLayout() {
	return (
		<>
			<div className='pages'>
				<ul>
					<Link
						className={location.pathname === "/host" ? "active" : ""}
						to='/host'
					>
						<li>Dashboard</li>
					</Link>
					<Link
						className={location.pathname === "/host/income" ? "active" : ""}
						to='/host/income'
					>
						<li>Income</li>
					</Link>
					<Link
						className={location.pathname === "/host/reviews" ? "active" : ""}
						to='/host/reviews'
					>
						<li>Reviews</li>
					</Link>
				</ul>
			</div>
			<br />
			<Outlet />
			<br />
		</>
	);
}

export default HostLayout;
