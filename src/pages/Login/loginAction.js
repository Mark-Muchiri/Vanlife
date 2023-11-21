import { loginUser } from "@/api";
import { redirect } from "@/redirectUtil.js";

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  await loginUser(
    {
      email,
      password
    }
  );
  localStorage.setItem("loginKey", true);

  return redirect('/host');
}
