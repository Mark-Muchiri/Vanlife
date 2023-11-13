import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

/**
 * Challenge: hook up our form so it (halfway) works.
 *
 * 1. Pull in the `loginUser` function from the api.js file
 * 2. Call loginUser when the form is submitted and console.log
 *    the data that comes back. Use "b@b.com" as the username and
 *    "p123" as the password.
 *
 *    NOTE: loginUser returns a promise, so you'll need
 *    a .then(data => {...}) to access the data, or use
 *    a separate aync function defined inside handleSubmit
 * 3. TBA
 */

function SignIn() {
	const message = useLoaderData();
	const [loginFormData, setLoginFormData] = useState({
		email: "",
		password: "",
	});

	function handleSubmit(e) {
		e.preventDefault();
		console.log(loginFormData);
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
				<form onSubmit={handleSubmit}>
					<div className='all-inputs'>
						<div className=''>
							<input
								className='input1'
								name='email'
								type='email'
								placeholder='Email address'
								value={loginFormData.email}
								onChange={handleChange}
							/>
						</div>
						<div className=''>
							<input
								className='input2'
								name='password'
								type='password'
								placeholder='Password'
								value={loginFormData.password}
								onChange={handleChange}
							/>
						</div>
					</div>
					<Link to='.'>
						<button className='signinbutton'>
							<p>Login</p>
						</button>
					</Link>
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
