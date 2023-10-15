import "./Nav.css";
import { NavLink, Link } from "react-router-dom";

function Nav() {
const activeStyle = {
	all: "unset",
	textDecoration: "underline",
	fontFamily: "Inter",
	fontWeight: "900",
	color: "#df8b37",
	cursor: "pointer",
};

	return (
		<>
			{/* Nav */}
			<nav>
				<Link to='/'>
					<div className='logo'>
						<p>#VANLIFE</p>
					</div>
				</Link>
				<div className='pages'>
					<ul>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : null)}
							className='link'
							to='/host'
						>
							Host
						</NavLink>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : null)}
							className='link'
							to='/about'
						>
							About
						</NavLink>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : null)}
							className='link'
							to='/vans'
						>
							Vans
						</NavLink>
					</ul>
				</div>
			</nav>
		</>
	);
}
export default Nav;
