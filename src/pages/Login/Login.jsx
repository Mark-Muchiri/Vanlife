import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";

/**
 * Challenge: Pass a message from the requireAuth function
 * that says "You must log in first." and display that message
 * in an <h2> BELOW the <h1>. Give it a classname of "red" for
 * some quick styling - (I added the CSS already).
 */

function SignIn() {
	const [loginFormData, setLoginFormData] = React.useState({
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
				<h2>Sign in to your account</h2>
				<div className='all-inputs'>
					<form onSubmit={handleSubmit}>
						<input
							id='input1'
							name='email'
							type='email'
							placeholder='Email address'
							value={loginFormData.email}
							onChange={handleChange}
						/>
						<input
							id='input2'
							name='password'
							type='password'
							placeholder='Password'
							value={loginFormData.password}
							onChange={handleChange}
						/>
					</form>
				</div>
				<Link to='.'>
					<button className='signinbutton'>
						<p>Sign In</p>
					</button>
				</Link>
				<div className='new-acc'>
					<p>{`Don't have a account?`}</p>
					<Link to='.'>Create one now</Link>
				</div>
			</div>
		</>
	);
}

export default SignIn;
