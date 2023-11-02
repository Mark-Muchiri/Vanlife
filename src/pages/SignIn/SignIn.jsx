import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
	return (
		<>
			<div className='signin-container'>
				<h2>Sign in to your account</h2>
				<div className='all-inputs'>
					<input
						id='input1'
						name='email'
						type='email'
						placeholder='Email address'
					/>
					<input
						id='input2'
						name='password'
						type='password'
						placeholder='Password'
					/>
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
