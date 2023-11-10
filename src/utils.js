import { redirect } from "./redirectUtil.js";

export async function requireAuth() {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    throw redirect('/login');
  }
  return null;
}
