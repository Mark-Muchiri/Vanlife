import { defer } from "react-router-dom";
import { getHostVans } from "../../../../api.js";
import { requireAuth } from "../../../../utils.js";

export async function hostVansLoader({ params, request }) {
  await requireAuth(request);

  const getHostVansPromise = getHostVans(params.id);
  return defer({ hostVans: getHostVansPromise });
}
