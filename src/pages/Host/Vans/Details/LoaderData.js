import { getHostVans } from "../../../../api.js";

export function loader({ params }) {
  console.log(params.id)
  return getHostVans(params.id);
}
