import React, { useState, useImperativeHandle } from 'react';
import { Link } from "react-router-dom";

import "./login.css"

export default function Login() {
	const [stateUsername, setUsername] = useState('');
	const [statePassword, setPassword] = useState('');

	function handleSubmit(e) {
		e.preventDefault()
		const {username, password} = e.target

		let body = {
			username: username.value,
			password: password.value
		}
		
	}

	return (
		<div data-testid="login-test-container">
			<h1 data-testid="login-h1-test-container">Strides</h1>

			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<input name="username" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
				<input name="password" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>

					<div>
						<button type='submit'>
							<Link to="/home">
								Login
							</Link>
						</button>
						<button type="button">
							<Link to="/register">
								Register
							</Link>
						</button>
					</div>
			</form>		
		</div>
	);
}