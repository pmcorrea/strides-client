import React, { useState } from 'react';
import { Route, Link, Redirect } from "react-router-dom";

import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { habitById, logHabit } from '../../Queries/queries'

import "./habit.css"
import BackArrowButton from "../../Assets/back.svg"
import EditButton from '../../Assets/edit.svg'
import CheckmarkButton from '../../Assets/checkmark.svg'

const dateHelper = require('date-fns')

export default function Habit(routeProps) {
	const [stateError, setError] = useState(null)
	let habitId = routeProps.match.params.id

	const { loading, data } = useQuery(habitById, {
		variables: {
			id: routeProps.match.params.id.toString()
		}
	})
	
	let diff;

	if (data) {
		let startDate = data["habitById"]["habit_start_date"]

		let today_iso = new Date().toISOString()
		let today = dateHelper.parseISO(today_iso)
		startDate = dateHelper.parseISO(startDate)

		diff = dateHelper.differenceInCalendarDays(
			today,
			startDate
		)

		diff = diff.toString()
	}
	
	function returnDays({sunday, monday, tuesday, wednesday, thursday, friday, saturday}) {
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

		return days
	}

	const [createLog, { loadinglogDay, datalogday, error }] = useMutation(
		logHabit,
		{
			variables: {
				id: habitId,
				column: diff
			},
			onError: (error) => {
				console.log(error.graphQLErrors[0].message)
				setError(`${error.graphQLErrors[0].message}`)
			},
			refetchQueries: [{ query: habitById,
				variables: {
					id: routeProps.match.params.id.toString()
				} }],
		});


	if (loadinglogDay || loadinglogDay === undefined) {
		// console.log('loading...')
	} else if (error) {
		console.log(error.message)
	} else if (datalogday) {
		console.log(datalogday["logDay"])
	}	

	function handleLog() {
		createLog()
	}

	return data ? (
		<div>
			<div className="habit-container">
				<div className="top-buttons">
					<Link to="/home">
						<img src={BackArrowButton} alt="" className="edit-icon" />
					</Link>

					<button className="no-margin">
						<Link to="/edit-habit">
							<img src={EditButton} alt="" className="edit-icon" />
						</Link>
					</button>

					<button className="no-margin" type="button" onClick={() => handleLog()}>	
						<img src={CheckmarkButton} alt="" className="edit-icon" />
					</button>
				</div>

				<div className="habit-title">
					<div className="no-margin">
						<h2>{data["habitById"]["title"]}</h2>
						<h3>{returnDays(data["habitById"])}</h3>
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
	) : (' ');
}