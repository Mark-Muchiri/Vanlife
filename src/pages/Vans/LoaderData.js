import { defer } from "react-router-dom";
import { getVan, getVans } from "@/api.js";

export async function vansLoader() {
	const getVansPromise = getVans();
	return defer({ vans: getVansPromise });
}

export async function detailsLoader({ params }) {
	const getVanPromise = getVan(params.id);
	return defer({ vanDetails: getVanPromise });
}
