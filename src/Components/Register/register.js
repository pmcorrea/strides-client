import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { addUser } from '../../Queries/queries'

import "./register.css"

export default function Register(routeProps) {
	const [stateError, setError] = useState(null)
	const [stateUsername, setUsername] = useState('');
	const [statePassword, setPassword] = useState('');
	const [stateConfirmPassword, setConfirmPassword] = useState('');

	const [createUser, { loading, data, error }] = useMutation(
		addUser,
		{ 
			variables: {
				user_name: stateUsername,
				user_password: statePassword
			},
			onError: (error) => {
				console.log(error.graphQLErrors[0].message)
				setError(`${error.graphQLErrors[0].message}`)
			}
		}
	)

	if (loading || loading === undefined) {
		// console.log('loading...')
	} else if (error) {
		console.log('err:', error.graphQLErrors[0].message)	
	} else if (data) {
		console.log(data["addUser"])
		routeProps.history.push("/")		
	}


	function handleSubmit(e) {
		e.preventDefault()
		createUser()
	}

	return (
		<div>
			<h1>Register</h1>

			<form action="" onSubmit={(e) => handleSubmit(e)} className="registration-form">
				<input name="username" type="text" placeholder="username" onChange={(e) => setUsername(e.target.value)}/>
				<input name="password" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
				<input name="confirmPassword" type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>

				<div>
					<Link to="/">
						Go Back
					</Link>
				
					<button type="submit">
							Submit	
					</button>
				</div>
		</form>

			{stateError ? <p>Something went wrong, try again...</p> : (' ')}
		</div>
	);
}