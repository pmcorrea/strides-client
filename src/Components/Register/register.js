import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./register.css"

export default function Register() {
	const [stateUsername, setUsername] = useState('');
	const [statePassword, setPassword] = useState('');
	const [stateConfirmPassword, setConfirmPassword] = useState('');

	function handleSubmit(e) {
		e.preventDefault()
		const { username, password, confirmPassword } = e.target

		let body = {
			username: username.value,
			password: password.value,
			confirmPassword: confirmPassword.value
		}

	}

	return (
		<div>
			<h1>Register</h1>

			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<input name="username" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
				<input name="password" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
				<input name="confirmPassword" type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>

				<div>
					<button type="button">
						<Link to="/">
							Go Back
						</Link>
					</button>

					<button type="submit">
						<Link to="/">
							Submit
						</Link>
					</button>
				</div>
		</form>
		</div>
	);
}