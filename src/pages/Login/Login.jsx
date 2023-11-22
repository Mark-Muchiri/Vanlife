import {
	Form,
	Link,
	useActionData,
	useLoaderData,
	useNavigate,
} from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { loginUser } from "@/api.js";

/**
 * Challenge: Remove error handling from the component state
 * and and a try...catch to the action to better handle the
 * errors, just like we just practiced.
 */

function SignIn() {
	const message = useLoaderData();
	const error = useActionData();
	const [status, setStatus] = useState("idle");
	const navigate = useNavigate();

	// eslint-disable-next-line no-unused-vars
	function handleSubmit(e) {
		e.preventDefault();
		setStatus("submitting");
		loginUser()
			.then((data) => {
				console.log(data);
				navigate("/host", { replace: true });
			})
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
						<p>{error}</p>
					</div>
				)}
				<Form method='POST' replace>
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
