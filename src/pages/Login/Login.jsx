import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { loginUser } from "@/api.js";

function SignIn() {
	const message = useLoaderData();
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState(null);
	const [loginFormData, setLoginFormData] = useState({
		email: "",
		password: "",
	});

	function handleSubmit(e) {
		setStatus("submitting");
		e.preventDefault();
		setError(null);
		loginUser(loginFormData)
			.then((data) => console.log(data))
			.catch((err) => setError(err))
			.finally(() => setStatus("idle"));
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setLoginFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	return (
		<>
			<div className='signin-container'>
				<h2>Login to your account</h2>
				{message && (
					<div className='warning'>
						<p>{message}</p>
					</div>
				)}
				{error && (
					<div className='warning'>
						<p>{error.message}</p>
					</div>
				)}
				<form onSubmit={handleSubmit}>
					<div className='all-inputs'>
						<input
							className='email'
							name='email'
							type='email'
							placeholder='Email address'
							value={loginFormData.email}
							onChange={handleChange}
						/>
						<input
							className='password'
							name='password'
							type='password'
							placeholder='Password'
							value={loginFormData.password}
							onChange={handleChange}
						/>
					</div>
					<button disabled={status === "submitting"} className='signinbutton'>
						<p>{status === "submitting" ? "Logging in..." : "Login"}</p>
					</button>
				</form>
				<div className='new-acc'>
					<p>{`Don't have a account?`}</p>
					<Link to='.'>Create one now</Link>
				</div>
			</div>
		</>
	);
}

export default SignIn;
