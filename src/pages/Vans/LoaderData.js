import { getVans } from "../../api.js"

export async function loader() {
	return getVans()
}
