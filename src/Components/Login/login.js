import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { useLazyQuery } from '@apollo/client'
import { loginUser } from '../../Queries/queries'
import ErrBoundary from "../ErrBoundary/err-boundary"
import "./login.css"
import TokenHelpers from '../../Services/token-helpers';
import RightSideImg from "../../Assets/right-container.jpg"

import iPhoneMock1 from "../../Assets/IMG_4767_iphonexspacegrey_portrait.png"
import iPhoneMock2 from "../../Assets/IMG_4768_iphonexspacegrey_portrait.png"
import iPhoneMock3 from "../../Assets/IMG_4769_iphonexspacegrey_portrait.png"

export default function Login(routeProps) {
	const [stateUsername, setUsername] = useState('');
	const [statePassword, setPassword] = useState('');
	
	const [loadUser, { loading, data, error }] = useLazyQuery(loginUser);
	
	if (loading) {

	} else if (error) {
		console.error('err', error.message)
	} else if (data) {
		TokenHelpers.clearAuthToken()
		TokenHelpers.saveAuthToken(data["loginUser"]["token"])
		routeProps.history.push("/home")		
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
		<div className="main-container">
			<div className="login-screen">
				<div data-testid="login-test-container" className="login-container">
					<ErrBoundary>
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
					</ErrBoundary>
				</div>
			
				<div className="rightside">
					<img src={RightSideImg} alt="background-img"></img>
					<div className="nav-links">
						<a href="#about">About</a>
						<a href="https://petercorrea.com">Portfolio</a>
					</div>
					<h1 className="title-right">Your companion for better habits.</h1>
					
				</div>
			</div>
			
			<div className="secondary-container">
				<div className="row-1">
					<div className="left">
						<img src={iPhoneMock2} alt="mock-iphone" className="mock-iphone-img"></img>
					</div>
					<div className="right">
						<h1>Be a better version</h1>
						<h1>of yourself</h1>
						<p>Strides was designed to be a minimalistic habit tracker</p>
						<p>Simply pick which dates to complete a habit and start logging.</p>
						<p>Get around to your goals and aim for perfect streaks!</p>
					</div>
				</div>

				<div className="row-2">
					<div className="left">
						<h1>Build the</h1>
						<h1>perfect routne</h1>
						<p>Track unlimited habits to build consistant routines.</p>
						<p>Plan around your time with custimized schedules.</p>
						<p>As you log, Strides will automatically generate basic stats and determine perfect streaks. </p>
					</div>
					<div className="right">
						<img src={iPhoneMock1} alt="mock-iphone" className="mock-iphone-img"></img>
					</div>
				</div>

				<div className="row-3">
					<div className="left">
						<img src={iPhoneMock3} alt="mock-iphone" className="mock-iphone-img"></img>
					</div>
					<div className="right">
						<h1 id="about">About Strides</h1>
						<p>As the perfect companion for developing new habits, Strides help users create and track personalized habits for thirty days.
				Be the best version of youself and push yourself to achieve perfect streaks.</p>

						<p>Strides was developed using React, NodeJS, GraphQL and Postgres. Deployment tools included Vercel and Heroku.
						Other notable tools and libraries include: React Hooks, Router and Context, Apollo, and Express.
						Testing was faciliated using Testing Library, Chai, and Mocha. Security considerations included implementing
				a JWT authorization system with expiring tokens, hashing/salting passwords with bcrypt, sanitizing input with XSS, and CORS for secured headers.</p>
					</div>
				</div>
			</div>
		</div>
	);
}