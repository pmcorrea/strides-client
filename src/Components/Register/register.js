import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { addUser, getUserByName } from '../../Queries/queries'

import "./register.css"

export default function Register(routeProps) {
	const [stateError, setError] = useState(null)
	const [stateUsername, setUsername] = useState('');
	const [statePassword, setPassword] = useState('');
	const [stateConfirmPassword, setConfirmPassword] = useState('');

	const [checkUsernameQuery, { loading: checkLoading, data: checkData, error: checkError }] = useLazyQuery(getUserByName)
	
	const [createUser, { loading, data, error }] = useMutation(
		addUser,
		{ 
			variables: {
				user_name: stateUsername,
				user_password: statePassword
			},
			onError: (error) => {
				setError(`${error.graphQLErrors[0].message}`)
			}
		}
	)

	

	if (loading || loading === undefined) {
		// console.log('loading...')
	} else if (error) {
		console.log('err:', error.graphQLErrors[0].message)	
	} else if (data) {
		routeProps.history.push("/")		
	}

	let localStateUsername = ''

	if (checkData) {

		if (checkData["getUserByName"]) {

			localStateUsername = ''
		} else {
			localStateUsername = stateUsername
		}
		
	}


		// setUsername(value)



	function handleSubmit(e) {
		e.preventDefault()
		createUser()
	}

	function disableSubmitbutton() {
		console.log(localStateUsername)
		if (localStateUsername === '') {
			return true
		}

		if (statePassword === "" || stateConfirmPassword === "") {
			return true
		}

		if (statePassword === stateConfirmPassword && stateConfirmPassword.length >= 8) {
			let pwPattern = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/
			let whiteSpacePattern = /(\s)+/

			let result = pwPattern.test(stateConfirmPassword)
			let result2 = whiteSpacePattern.test(stateConfirmPassword)
			console.log(result, result2)

			if (!result && !result2) {
				return false
			}

		
		} else {
			return true
		}
		
	}

	

	return (
		<div>
			<h1>Register</h1>

			<form action="" onSubmit={(e) => handleSubmit(e)} className="registration-form">
				<div className="input-container">
					<input name="username" type="text" placeholder="username" onChange={(e) => {
						checkUsernameQuery({
							variables: {
								user_name: e.target.value
							}
						})

						setUsername(e.target.value)
					}
					}/>
					<label htmlFor="username">username</label>
				</div>

				<div className="input-container">
					<input name="password" type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
					<label htmlFor="password">password</label>
				</div>

				<div className="input-container">
					<input name="confirmPassword" type="password" placeholder="confirm password" onChange={(e) => setConfirmPassword(e.target.value)}/>
					<label htmlFor="confirmPassword">confirm password</label>
				</div >

				<div>
					<Link to="/">
						Go Back
					</Link>
				
					<button type="submit" style={{ 
						display: disableSubmitbutton() ? 'none' : 'block'
						}}>
							Submit	
					</button>
				</div>
		</form>

		<div className="password-reqs">
			<p>Password requirements:</p>
			<p>-Length of 8 or more.</p>
			<p>-Must contain special symbols.</p>
			<p>-Must contain alphanumerical.</p>
		</div>

			{stateError ? <p>Something went wrong, try again...</p> : (' ')}
		</div>
	);
}