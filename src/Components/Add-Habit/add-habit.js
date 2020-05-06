import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./add-habit.css"

export default function AddHabit() {
	// const [count, setCount] = useState(0);

	return (
		<div>
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