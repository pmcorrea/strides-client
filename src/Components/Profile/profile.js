import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./profile.css"
import Gear from "../../Assets/gear.svg"
import Avatar from 	"../../Assets/avatar.jpg"

export default function Profile() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<div className="profile-box">
				<div className="top-bar">
					
					<button className="circle-button">Logo</button>
					<button>
						<Link to="/settings">
							<img src={Gear} alt="" className="icon-bar-icon" />
						</Link>
						</button>
			</div>


					<img src={Avatar} alt="" className="avatar" />


						<h2>Penelope Arias</h2>

						<div className="progress-bar-container">
							<div className="progress-bar-profile">
								<div className="progress-bar-fill-profile"></div>
							</div>

							<div className="progress-bar-stats">
								<p>lvl 4</p>
								<p>26%</p>
							</div>
						</div>

						<div className="stats">
					<div className="box-1 margin-center">
								<p className="stats-box-header">habits done</p>
								<p className="stats-box-num">9</p>
							</div>

					<div className="box-2 margin-center">
								<p className="stats-box-header">logged days</p>
								<p className="stats-box-num">9</p>
							</div>

					<div className="box-3 margin-center">
								<p className="stats-box-header">perfect habits</p>
								<p className="stats-box-num">9</p>
							</div>

					<div className="box-4 margin-center">
								<p className="stats-box-header">biggest streak</p>
								<p className="stats-box-num">9</p>
							</div>
						</div>
		</div>
		</div>
	);
}