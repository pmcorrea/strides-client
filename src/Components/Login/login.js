import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { loginUser } from '../../Queries/queries'

import "./login.css"
import TokenHelpers from '../../Services/token-helpers';

export default function Login(routeProps) {
	const [stateUsername, setUsername] = useState('');
	const [statePassword, setPassword] = useState('');
	
	const [loadUser, { loading, data, error }] = useLazyQuery(
		loginUser,
		{ variables: { 
			user_name: stateUsername, 
			user_password: statePassword 
		}});
	
	
	if (loading || loading === undefined) {
		// console.log('loading...')
	} else if (error) {
		console.log(error.message)
	} else if (data) {
		console.log(data["loginUser"]["token"])
		TokenHelpers.clearAuthToken()
		TokenHelpers.saveAuthToken(data["loginUser"]["token"])
		routeProps.history.push("/home")		
	} 

	function handleSubmit(e) {
		e.preventDefault()	
		loadUser()
	}

	return (

		<div data-testid="login-test-container">
			<h1 data-testid="login-h1-test-container">Strides</h1>

			<form action="" onSubmit={(e) => handleSubmit(e)} className="login-form">
				<input name="username" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
				<input name="password" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>

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