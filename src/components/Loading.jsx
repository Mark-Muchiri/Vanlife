import "./Loading.css";
import { FadingDots } from "react-cssfx-loading";

function Loading() {
	return (
		<>
			<div className='loading-container'>
				<div className=''>
					<FadingDots
						color='#FF6B00'
						width='80px'
						height='80px'
					/>
				</div>
			<h2>...Loading...</h2>
			</div>
		</>
	);
}

export default Loading;
