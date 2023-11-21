import { Form, Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { loginUser } from "@/api.js";

/**
 * Challenge: figure out how to send the user to the /host
 * route after they successfully log in
 */

function SignIn() {
	const message = useLoaderData();
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState(null);

	// eslint-disable-next-line no-unused-vars
	function handleSubmit(e) {
		setStatus("submitting");
		e.preventDefault();
		setError(null);
		loginUser()
			.then((data) => console.log(data))
			.catch((err) => setError(err))
			.finally(() => setStatus("idle"));
	}

	return (
		<>
			<div className='signin-container'>
				<h2>Login to your account</h2>
				{/* Login prompt */}
				{message && (
					<div className='warning'>
						<p>{message}</p>
					</div>
				)}
				{/* Error prompt */}
				{error && (
					<div className='warning'>
						<p>{error.message}</p>
					</div>
				)}
				<Form method='POST'>
					<div className='all-inputs'>
						<input
							className='email'
							name='email'
							type='email'
							placeholder='Email address'
						/>
						<input
							className='password'
							name='password'
							type='password'
							placeholder='Password'
						/>
					</div>
					<button disabled={status === "submitting"} className='signinbutton'>
						<p>{status === "submitting" ? "Logging in..." : "Login"}</p>
					</button>
				</Form>
				<div className='new-acc'>
					<p>{`Don't have a account?`}</p>
					<Link to='.'>Create one now</Link>
				</div>
			</div>
		</>
	);
}

export default SignIn;
