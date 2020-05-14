import React, { useState } from 'react';
import { Link } from "react-router-dom";

import HomeIcon from "../../Assets/home-icon.svg"
import PlusIcon from "../../Assets/plus-icon.svg"
import ProfileIcon from "../../Assets/profile-icon.svg"

import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { habitById, logHabit, deleteHabit, habitsByUser } from '../../Queries/queries'

import "./home.css"
const dateHelper = require('date-fns')

function returnDays({ sunday, monday, tuesday, wednesday, thursday, friday, saturday }) {
	let days = []

	if (sunday === 'true') {
		days.push('sun')
	}

	if (monday === 'true') {
		days.push('mon')
	}

	if (tuesday === 'true') {
		days.push('tue')
	}

	if (wednesday === 'true') {
		days.push('wed')
	}

	if (thursday === 'true') {
		days.push('thu')
	}

	if (friday === 'true') {
		days.push('fri')
	}

	if (saturday === 'true') {
		days.push('sat')
	}

	if (days.length === 7) {
		return "everyday"
	}

	if (days.length === 0) {
		return "any day"
	}

	days = days.join(", ")
	return days
}



	


export default function Home() {
	const [stateError, setError] = useState(null)
	const { loading, data } = useQuery(habitsByUser)

	const [createLog, { loadinglogDay, datalogday, error }] = useMutation(
		logHabit,
		{
			onError: (error) => {
				console.log(error)
				setError(`${error}`)
			},
			refetchQueries: [{
				query: habitsByUser,
			}]
		});

	function diff(startDate) {
		console.log(startDate)
		let today_iso = new Date().toISOString()
		let today = dateHelper.parseISO(today_iso)
		startDate = dateHelper.parseISO(startDate)

		let diff = dateHelper.differenceInCalendarDays(
			today,
			startDate
		)

		diff = diff.toString()
		return diff
	}

	function progressBarPercentage(someDate) {

		let today_iso = new Date().toISOString()
		let today = dateHelper.parseISO(today_iso)
		let startDate = dateHelper.parseISO(someDate)

		let diffProgress = dateHelper.differenceInCalendarDays(
			today,
			startDate
		)


		if (diffProgress >= 30) {
			return 100
		} else if (diffProgress < 30) {
			return ((diffProgress) / 30) * 100
		}
	}
	

	return loading ? (" ") : (
		<div>
			<ul>
				{(data === undefined) ? (" ") : 

					data['habitsByUser'].map((item) => (
					<li key={item.id}>
						<div className="habit-tool-bar">
							<p>{item.title}</p>

							<div>
									<button className="cursor" onClick={() => createLog({
										variables: {
										id: `${item.id}`,
										column: diff(item.habit_start_date),
										current_streak: item.current_streak,
										last_log: item.last_log,
										highest_streak: item.highest_streak,

										habit_start_date: item.habit_start_date,
										perfect_streak: item.perfect_streak,
										sunday: item.sunday,
										monday: item.monday,
										tuesday: item.tuesday,
										wednesday: item.wednesday,
										thursday: item.thursday,
										friday: item.friday,
										saturday: item.saturday,
										last_scheduled_logged: item.last_scheduled_logged
										}})}>log</button>
								<button>
									<Link to={`/habit/${item.id}`}>
										...
									</Link>
								</button>
							</div>
						</div>

							<p>{returnDays(item)}</p>
						<div className="progress-bar">
								<div className="progress-bar-fill" style={{
									width: `${progressBarPercentage(item.habit_start_date)}%`
								}}></div>
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