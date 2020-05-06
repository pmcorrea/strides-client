import React, { useState } from 'react';
import { Route, Link, Redirect } from "react-router-dom";

import "./habit.css"
import BackArrowButton from "../../Assets/back.svg"
import EditButton from '../../Assets/edit.svg'
import CheckmarkButton from '../../Assets/checkmark.svg'

export default function Habit() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<div className="habit-container">
				<div className="top-buttons">
					<Link to="/home">
						<img src={BackArrowButton} alt="" className="edit-icon" />
					</Link>

					<button className="no-margin">
						<Link to="edit-habit">
							<img src={EditButton} alt="" className="edit-icon" />
						</Link>
						<img src={CheckmarkButton} alt="" className="edit-icon" />
					</button>
				</div>

				<div className="habit-title">
					<div className="no-margin">
						<h2>Practice Code</h2>
						<h3>everyday</h3>
					</div>
				</div>

				<div className="completion-container">
					<p>Completion Rate</p>
					<div className="progress-bar">
						<div className="progress-bar-fill"></div>
					</div>
					<p>26%</p>
				</div>

				<div className="habit-stats">
					<div className="stat-box">
						<p>Week</p>
						<div className="grid-container">
							<div className="Sunday">S</div>
							<div className="Monday">M</div>
							<div className="Tuesday">T</div>
							<div className="Wednesday">W</div>
							<div className="Thursday">T</div>
							<div className="Friday">F</div>
							<div className="Saturday">S</div>

							<div className="sunday-fill filled">.</div>
							<div className="monday-fill filled">.</div>
							<div className="tuesday-fill not-filled">.</div>
							<div className="wednesday-fill not-filled">.</div>
							<div className="thursday-fill not-filled">.</div>
							<div className="friday-fill not-filled">.</div>
							<div className="saturday-fill not-filled">.</div>
						</div>
					</div>

					<div className="stat-box">
						<p>Current Streak</p>
						<p id="stats-box-num">2</p>
						<p>days</p>
					</div>

					<div className="stat-box">
						<p>Highest Streak</p>
						<p id="stats-box-num">10</p>
						<p>days</p>
					</div>
				</div>

				<button className="delete-button">
					<p>Delete</p>
				</button>
			</div>
		</div>
	);
}