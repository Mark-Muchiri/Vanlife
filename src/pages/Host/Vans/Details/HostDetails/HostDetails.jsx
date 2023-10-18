import { useOutletContext } from "react-router-dom";
import "./HotDetails.css";

function HostDetails() {
	// state that holds fetched data
	const [hostVanDetail] = useOutletContext();

	return (
		<>
			<p className='host-vans-description'>
				Name: <span>{hostVanDetail.name}</span>
			</p>
			<p className='host-vans-description'>
				Category: <span>{hostVanDetail.type}</span>
			</p>
			<p className='host-vans-description'>
				Description: <span>{hostVanDetail.description}</span>
			</p>
			<p className='host-vans-description'>
				Visibility: <span>{`Public`}</span>
			</p>
		</>
	);
}

export default HostDetails;
