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
  console.log(data);
  return null;
}
