import { loginUser } from "@/api";

export async function loginAction({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");
  const data = await loginUser(
    {
      email,
      password
    }
  );
  console.log("Login actions", data);
  localStorage.setItem("loginKey", true);
  const loginKey = localStorage.getItem("loginKey");
  console.log("login key", loginKey);
  return null;
}
