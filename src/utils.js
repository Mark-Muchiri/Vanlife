import { redirect } from "./redirectUtil.js";

export async function requireAuth() {
  const loginKey = localStorage.getItem("loginKey");
  const isLoggedIn = loginKey;
  
  if (!isLoggedIn) {
    throw redirect('/login?message=You must log in first.')
  }
  return null;
}
