import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import { loginUser } from "../../api";

/**
 * Challenge: Code the sad path 🙁
 * 3. Add a `status` state and default it to "idle". When the
 *    login form begins submitting, set it to "submitting". When
 *    it's done submitting (whether successful or not), set it
 *    to "idle" again.
 * 4. Disable the button when the `status` state is "submitting"
 *    (this may require some Googling if you haven't done this
 *    before).
 * 5. Add an `error` state and default it to `null`. When the
 *    form is submitted, reset the errors to `null`. If there's
 *    an error from `loginUser` (add a .catch(err => {...}) in
 *    the promise chain), set the error to the error that
 *    comes back.
 * 6. Display the error.message below the `h1` if there's ever
 *    an error in state
 */

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
						<p>{status === "submitting" ? "Loghing in..." : "Login"}</p>
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
