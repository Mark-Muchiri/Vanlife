import { loginUser } from "@/api";
import { redirect } from "@/redirectUtil.js";

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
  try {
    await loginUser({ email, password });
    localStorage.setItem("loginKey", true);
    return redirect(pathname);
  } catch (err) {
    return err.message;
  }
}

export async function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}