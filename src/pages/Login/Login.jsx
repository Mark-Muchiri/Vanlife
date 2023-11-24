import {
	Form,
	Link,
	useActionData,
	useLoaderData,
	useNavigation,
} from "react-router-dom";
import "./Login.css";

function SignIn() {
	const message = useLoaderData();
	const error = useActionData();
	const navigation = useNavigation();

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
					<button
						disabled={navigation.state === "submitting"}
						className='signinbutton'
					>
						<p>
							{navigation.state === "submitting" ? "Logging in..." : "Login"}
						</p>
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
