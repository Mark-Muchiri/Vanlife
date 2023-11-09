import { useOutletContext } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./Photos.css";

function Photos() {
	// state that holds fetched data
	const hostVanDetail = useOutletContext();

	return (
		<>
			<div className='img-container-host'>
				<LazyLoadImage
					effect='blur'
					src={hostVanDetail.imageUrl}
					alt={`${hostVanDetail.name} image`}
					width={`103px`}
					height={`101.555px`}
				/>
			</div>
		</>
	);
}

export default Photos;
