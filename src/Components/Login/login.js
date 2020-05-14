import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { loginUser } from '../../Queries/queries'

import "./login.css"
import TokenHelpers from '../../Services/token-helpers';

export default function Login(routeProps) {
	const [stateUsername, setUsername] = useState('');
	const [statePassword, setPassword] = useState('');
	
	const [loadUser, { loading, data, error }] = useLazyQuery(loginUser);
	
	if (error) {
		console.log(error.message)
	} else if (data) {
		TokenHelpers.clearAuthToken()
		TokenHelpers.saveAuthToken(data["loginUser"]["token"])
		routeProps.history.push("/home")		
	} else {

	}

	function handleSubmit(e) {
		e.preventDefault()	
		loadUser({
			variables: {
				user_name: stateUsername,
				user_password: statePassword
			}
		})
	}

	return (
		<div data-testid="login-test-container">
			<h1 data-testid="login-h1-test-container">Strides</h1>

			<form action="" onSubmit={(e) => handleSubmit(e)} className="login-form">
				<div className="input-container">
					<input name="username" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
					<label htmlFor="username">username</label>
				</div>

				<div className="input-container">
					<input name="password" type="password" placeholder="username" onChange={(e) => setPassword(e.target.value)}/>
					<label htmlFor="password">password</label>
				
				</div>
					<div>
						<button type='submit'>
							Login
						</button>

						<Link to="/register">
							Register
						</Link>	
					</div>
			</form>		
		</div>
	);
}