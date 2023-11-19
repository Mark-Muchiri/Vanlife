import { Form, Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { loginUser } from "@/api.js";

/**
 * Challenge: Start implementing actions to handle our
 * form data
 *
 * 1. Replace <form> with <Form> from React Router
 * 2. Add a `method` prop to the <Form>.
 * 3. Create an action function in this file. It should just log
 *    "Action function" to the console and `return null` for now.
 * 4. Register the action function on the <Route>
 */

function SignIn() {
	const message = useLoaderData();
	const [status, setStatus] = useState("idle");
	const [error, setError] = useState(null);

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
