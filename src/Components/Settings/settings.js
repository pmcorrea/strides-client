import React from 'react';
import { Link } from "react-router-dom";
import ErrBoundary from "../ErrBoundary/err-boundary"
import "./settings.css"
import BackArrowButton from "../../Assets/back.svg"

export default function Settings() {

	return (
		<div className="settings-container">
			<ErrBoundary>
			<div className="top-buttons">
				<Link to="/profile">
					<img src={BackArrowButton} alt="" className="edit-icon" />
				</Link>	
			</div>

			<h2>General</h2>
			<h3>About This App</h3>
			<p>As the perfect companion for developing new habits, Strides help users create and track personalized habits for thirty days.
				Be the best version of youself and push yourself to achieve perfect streaks.</p> 
			<br></br>
			<p>Strides was developed using React, NodeJS, GraphQL and Postgres. Deployment tools included Vercel and Heroku. 
				Other notable tools and libraries include: React Hooks, Router and Context, Apollo, and Express.</p>
				<br></br>''
			<p>Testing was faciliated using Testing Library, Chai, and Mocha. Security considerations included implementing 
				a JWT authorization system with expiring tokens, hashing/salting passwords with bcrypt, sanitizing input with XSS, and CORS for secured headers.</p>

			<h2>Legal</h2>
			<h3>Privacy Policy</h3>
			<p>This app collects only the data you directly submit only to serve you this service. Nothing is sold, leased, rented or otherwise provided to thirdparties.</p>
			<br></br>
			<h3>Terms And Conditions</h3>
			<p>Use at your own risk.</p>

			<h2>More</h2>
			<a href="mailto:pmcorrea@me.com" className="mailto">Send Feedback</a>
			</ErrBoundary>
		</div>
	);
}