import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import "./profile.css"
import Gear from "../../Assets/gear.svg"
import Avatar from 	"../../Assets/avatar.jpg"

import HomeIcon from "../../Assets/home-icon.svg"
import PlusIcon from "../../Assets/plus-icon.svg"
import ProfileIcon from "../../Assets/profile-icon.svg"

import { useQuery } from '@apollo/client'
import { habitsByUser, userById } from "../../Queries/queries"

export default function Profile() {
	const [stateError, setError] = useState(null)
	const { loading, data, refetch } = useQuery(userById)

	useEffect(() => {
		refetch()
	})
	
	if (loading) {
		return ( " ")
	}

	

	return (
		<div>
			<div className="profile-box">
				<div className="top-bar">
					
					<button className="circle-button"> </button>
					<button>
						<Link to="/settings">
							<img src={Gear} alt="" className="icon-bar-icon" />
						</Link>
						</button>
			</div>


					<img src={Avatar} alt="" className="avatar" />


						<h2>{data["userById"][0]["user_name"]}</h2>

						{/* <div className="progress-bar-container">
							<div className="progress-bar-profile">
								<div className="progress-bar-fill-profile"></div>
							</div>

							<div className="progress-bar-stats">
								<p>lvl 4</p>
								<p>26%</p>
							</div>
						</div> */}

						<div className="stats">
					<div className="box-1 margin-center">
								<p className="stats-box-header">habits done</p>
								<p className="stats-box-num">{data["userById"][0]["habits_done"]}</p>
							</div>

					<div className="box-2 margin-center">
								<p className="stats-box-header">logged days</p>
						<p className="stats-box-num">{data["userById"][0]["logged_total"]}</p>
							</div>

					<div className="box-3 margin-center">
								<p className="stats-box-header">perfect habits</p>
								<p className="stats-box-num">{data["userById"][0]["perfect_habits"]}</p>
							</div>

					<div className="box-4 margin-center">
								<p className="stats-box-header">biggest streak</p>
								<p className="stats-box-num">{data["userById"][0]["biggest_streak"]}</p>
							</div>
						</div>
		</div>

			<div className="bottom-toolbar">
				<button>
					<Link to="/home">
						<img src={HomeIcon} alt="" className="icon-bar-icon" />
					</Link>
				</button>

				<button>
					<Link to="/add-habit">
						<img src={PlusIcon} alt="" className="icon-bar-icon" />
					</Link>
				</button>

				<button>
					<Link to="/profile">
						<img src={ProfileIcon} alt="" className="icon-bar-icon" />
					</Link>
				</button>
			</div>	
		</div>
	);
}