import { defer } from "react-router-dom";
import { getVans } from "../../api.js";

export async function vansLoader() {
	return defer({ vans: getVans() });
}

export async function detailsLoader({ params }) {
	const getVansPromise = getVans(params.id)
	return defer({vanDetails: getVansPromise});
}
