import { getVans } from "../../api.js"

export function loader() {
	return getVans()
}