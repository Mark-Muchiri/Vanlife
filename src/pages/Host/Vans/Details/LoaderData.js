import { getHostVans } from "../../../../api.js";
import { requireAuth } from "../../../../utils.js";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostVans(params.id);
}
