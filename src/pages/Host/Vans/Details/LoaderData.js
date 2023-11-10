import { getHostVans } from "../../../../api.js";
import { requireAuth } from "../../../../utils.js";

export async function loader({ params }) {
  await requireAuth()
  return getHostVans(params.id);
}
