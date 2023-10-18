import { Outlet, NavLink } from "react-router-dom";
import "./HostLayout.css";

function HostLayout() {
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
			<div className='host-layout'>
				<ul>
					{/* NOTE : use end for the indxed route NavLink */}
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : null)}
						className='link'
						to='.'
						end
					>
						Dashboard
					</NavLink>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : null)}
						className='link'
						to='income'
					>
						Income
					</NavLink>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : null)}
						className='link'
						to='vans'
					>
						Vans
					</NavLink>
					<NavLink
						style={({ isActive }) => (isActive ? activeStyle : null)}
						className='link'
						to='reviews'
					>
						Reviews
					</NavLink>
				</ul>
			</div>
			<br />
			<Outlet />
			<br />
		</>
	);
}

export default HostLayout;
