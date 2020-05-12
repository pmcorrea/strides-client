import React, { useState } from 'react';
import { Link } from "react-router-dom";

import HomeIcon from "../../Assets/home-icon.svg"
import PlusIcon from "../../Assets/plus-icon.svg"
import ProfileIcon from "../../Assets/profile-icon.svg"

import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { habits, habitsByUser } from '../../Queries/queries'

import "./home.css"

function returnDays({ sunday, monday, tuesday, wednesday, thursday, friday, saturday }) {
	let days = []

	if (sunday === 'true') {
		days.push('Sunday')
	}

	if (monday === 'true') {
		days.push('Monday')
	}

	if (tuesday === 'true') {
		days.push('Tuesday')
	}

	if (wednesday === 'true') {
		days.push('Wednesday')
	}

	if (thursday === 'true') {
		days.push('Thursday')
	}

	if (friday === 'true') {
		days.push('Friday')
	}

	if (saturday === 'true') {
		days.push('Saturday')
	}

	days = days.join(", ")
	console.log(days)
	return days
}

export default function Home() {

	const { loading, data } = useQuery(habitsByUser)
	

	return loading ? (" ") : (
		<div>
			<ul>
				{(data === undefined) ? (" ") : 

					data['habitsByUser'].map((item) => (
					<li key={item.id}>
						<div className="habit-tool-bar">
							<p>{item.title}</p>

							<div>
								<button>log</button>
								<button>
									<Link to={`/habit/${item.id}`}>
										...
									</Link>
								</button>
							</div>
						</div>

							<p>{returnDays(item)}</p>
						<div className="progress-bar">
							<div className="progress-bar-fill"></div>
						</div>
					</li>
				)
				)}
			</ul>

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