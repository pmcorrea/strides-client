import React, { useState } from 'react';
import { Route, Link, Redirect } from "react-router-dom";

import "./settings.css"
import BackArrowButton from "../../Assets/back.svg"
import TokenHelpers from "../../Services/token-helpers"
import { useApolloClient } from '@apollo/client'

export default function Settings() {
	// const [count, setCount] = useState(0);
	const client = useApolloClient()

	function logOut() {
		TokenHelpers.clearAuthToken()
		client.resetStore()
	}

	return (
		<div>
			<div className="settings-container">
				<div className="top-buttons">
					<Link to="/profile">
						<img src={BackArrowButton} alt="" className="edit-icon" />
					</Link>	
					

					<h3>
						<Link to="/">
							<button onClick={() => logOut()}>
								Logout
							</button>
						</Link>	
					</h3>
			</div>

					

					<h2>
						General
			</h2>
					<p>About This App</p>

					<h2>
						Notifications
			</h2>
					<p>Morning Reminder</p>
					<p>Evening Reminder</p>

					<h2>
						Legal
			</h2>
					<p>Privacy Policy</p>
					<p>Terms And Conditions</p>

					<h2>
						Account
			</h2>
					<p>Send Feedback</p>
					<p>Reset Progress</p>
					<p>Log Out</p>

				</div>
		</div>
	);
}