import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import ErrBoundary from "../ErrBoundary/err-boundary"
import "./profile.css"
import Gear from "../../Assets/settings.svg"
import Avatar from 	"../../Assets/avatar.svg"
import Logout from "../../Assets/logout.svg"

import HomeIcon from "../../Assets/home-icon.svg"
import PlusIcon from "../../Assets/plus-icon.svg"
import ProfileIcon from "../../Assets/profile-icon.svg"

import { useQuery } from '@apollo/client'
import { userById } from "../../Queries/queries"
import TokenHelpers from "../../Services/token-helpers"
import { useApolloClient } from '@apollo/client'

export default function Profile() {
	const { loading, data, refetch } = useQuery(userById)
	const client = useApolloClient()

	useEffect(() => {
		refetch()
	})
	
	if (loading) {
		return (" ")
	}

	function logOut() {
		TokenHelpers.clearAuthToken()
		client.resetStore()
	}

	return (
	<div>
			<ErrBoundary>
		<div className="profile-box">
			<div className="top-bar">
				<button>
					<Link to="/settings">
						<img src={Gear} alt="" className="icon-bar-icon" />
					</Link>
				</button>

				<Link to="/">
					<button className="logout-button" onClick={() => logOut()}>
						<img src={Logout} alt="" className="icon-bar-icon logout-button" />
					</button>
				</Link>	
			</div>


			<img src={Avatar} alt="" className="avatar" />
			<h2>{data["userById"][0]["user_name"]}</h2>

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
			</ErrBoundary>
	</div>
	);
}