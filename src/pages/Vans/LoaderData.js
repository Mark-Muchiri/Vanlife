import { getVans } from "../../api.js";

export async function vansLoader() {
	return getVans();
}

export async function detailsLoader({ params }) {
	return getVans(params.id);
}