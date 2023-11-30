// Importing necessary components and styles
import "./HostVansLayout.css";
import { Await, Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

/**
 * TODO: Add defer and Await
 ** Chnange `hostVanDetail` const to `dataPromise`
 ** Create an Await custom element
 ** Create a resolve called 'dataPromise'
 ** Create an a callback function inside it
 ** Call the data inside the callback function `hostVanDetail`
 ** Put all the javascript that uses the `hostVanDetail` name inside the function
 ** Add a return inside the callback function
 ** Inside the callback function return the mark-up that will conditionally render
 */

// Defining the functional component HostVansID
function HostVansID() {
	const activeStyle = {
		all: "unset",
		textDecoration: "underline",
		fontFamily: "Inter",
		fontWeight: "900",
		color: "#df8b37",
		cursor: "pointer",
	};

	// state that holds fetched data
	const dataPromise = useLoaderData();

	// Returning the JSX elements to be rendered
	return (
		<>
			<Await resolve={dataPromise.hostVans}>
				{(hostVanDetail) => {
					return (
						<>
							{/* Back to all vans */}
							<div className='all-vans-container'>
								<Link to='..' relative='path'>
									<div className='back-host-vandetail'>
										<LazyLoadImage
											effect='blur'
											src='/leftArrow.svg'
											alt={`back arrow icon`}
											width={`30px`}
										/>
										<p>Back to all vans</p>
									</div>
								</Link>
							</div>
							{/* van image && text */}
							<div className='host-detail-container'>
								<div className='image-text'>
									<LazyLoadImage
										effect='blur'
										src={hostVanDetail.imageUrl}
										alt={`van image`}
										width={`160.15px`}
										height={`157.903px`}
									/>
									<div className='text'>
										<div className='vantype-container'>
											<i className={`van-type ${hostVanDetail.type} selected`}>
												{hostVanDetail.type}
											</i>
										</div>
										<div className='name-rates'>
											<h2>{hostVanDetail.name}</h2>
											<p className='rates'>
												<p className='cost'>${hostVanDetail.price}</p>
												<span>/day</span>
											</p>
										</div>
									</div>
								</div>
								{/* navs */}
								<div className='host-van-pages'>
									<ul>
										<NavLink
											style={({ isActive }) => (isActive ? activeStyle : null)}
											className='link'
											to={`.`}
											end
										>
											Details
										</NavLink>
										<NavLink
											style={({ isActive }) => (isActive ? activeStyle : null)}
											className='link'
											to={`pricing`}
										>
											Pricing
										</NavLink>
										<NavLink
											style={({ isActive }) => (isActive ? activeStyle : null)}
											className='link'
											to={`photos`}
										>
											Photos
										</NavLink>
									</ul>
								</div>
								<br />
								{/* Children components */}
								<Outlet context={hostVanDetail} />
							</div>
						</>
					);
				}}
			</Await>
		</>
	);
}

export default HostVansID;
