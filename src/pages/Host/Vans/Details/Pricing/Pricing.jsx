import { useOutletContext } from "react-router-dom";
import "./Pricing.css";

function Pricing() {
	// state that holds fetched data
	const hostVanDetail = useOutletContext();

	return (
		<>
			<p className='pricing'>
				${hostVanDetail.price}
				<span>/day</span>
			</p>
		</>
	);
}

export default Pricing;
