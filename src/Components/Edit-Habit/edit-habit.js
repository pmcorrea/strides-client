import React, { useState } from 'react';
import { Route, Link, Redirect } from "react-router-dom";

import "./edit-habit.css"
import BackArrowButton from "../../Assets/back.svg"

export default function EditHabit() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<Link to="/habit">
				<img src={BackArrowButton} alt="" className="edit-icon add-margin" />
			</Link>	

			<form action="" className="add-habit-form">
				<p>I want to</p>
				<input type="text" placeholder="meditate" />
					<p>every</p>

					<div>
						<button className="circle-button-s">S</button>
						<button className="circle-button-s">M</button>
						<button className="circle-button-s">T</button>
						<button className="circle-button-s">W</button>
						<button className="circle-button-s">T</button>
						<button className="circle-button-s">F</button>
						<button className="circle-button-s">S</button>
					</div>
					<p>for 30 days</p>

						<button type="submit">
							<Link to="/home">
								Submit
							</Link>
						</button>
					
			</form>
		</div>
	);
}