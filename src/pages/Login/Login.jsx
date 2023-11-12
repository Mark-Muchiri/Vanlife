import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

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
						<p>Login</p>
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
