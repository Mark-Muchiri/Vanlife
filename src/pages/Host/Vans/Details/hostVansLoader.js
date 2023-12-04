import { defer } from "react-router-dom";
import { getHostVans, getVan } from "@/api.js";
import { requireAuth } from "@/utils.js";

export async function hostVansLoader({ params, request }) {
  await requireAuth(request);

  const getVanPromise = getHostVans(params.id);
  return defer({ hostVans: getVanPromise });
}

export async function hostVansDetailLoader({ params, request }) {
  await requireAuth(request);

  const getVanPromise = getVan(params.id);
  return defer({ hostVans: getVanPromise });
}