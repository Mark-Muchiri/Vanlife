import { redirect } from "@/redirectUtil.js";

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  const loginKey = localStorage.getItem("loginKey");
  const isLoggedIn = loginKey;

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must log in first.&redirectTo=${pathname}`
    );
  }
  return null;
}