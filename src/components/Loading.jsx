import './Loading.css'
import { FadingDots } from "react-cssfx-loading";

function Loading() {
	return (
		<>
			<div className='loading-container'>
				<FadingDots color='#FF6B00' width='100px' height='100px' />
			</div>
		</>
	);
}

export default Loading;
