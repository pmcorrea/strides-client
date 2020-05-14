import React, { useState } from 'react';
import { Route, Link, Redirect } from "react-router-dom";

import { useQuery, useMutation, useLazyQuery } from '@apollo/client'
import { habitById, logHabit, deleteHabit, habitsByUser } from '../../Queries/queries'

import "./habit.css"
import BackArrowButton from "../../Assets/back.svg"
import EditButton from '../../Assets/edit.svg'
import CheckmarkButton from '../../Assets/checkmark.svg'
import NotCheckmarkButton from '../../Assets/not-checkmark.svg'

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
	let startDate;
	let current_streak;
	let last_log;
	let highest_streak;
	let perfect_streak;
	let sunday;
	let monday;
	let tuesday;
	let wednesday;
	let thursday;
	let friday;
	let saturday;
	let last_scheduled_logged;

	if (data) {
		startDate = data["habitById"]["habit_start_date"]

		let today_iso = new Date().toISOString()
		let today = dateHelper.parseISO(today_iso)
		startDate = dateHelper.parseISO(startDate)

		diff = dateHelper.differenceInCalendarDays(
			today,
			startDate
		)

		diff = diff.toString()
		current_streak = data["habitById"]["current_streak"]
		perfect_streak = data["habitById"]["perfect_streak"]
		last_log = data["habitById"]["last_log"]
		highest_streak = data["habitById"]["highest_streak"]
		sunday = data["habitById"]["sunday"]
		monday = data["habitById"]["monday"]
		tuesday = data["habitById"]["tuesday"]
		wednesday = data["habitById"]["wednesday"]
		thursday = data["habitById"]["thursday"]
		friday = data["habitById"]["friday"]
		saturday = data["habitById"]["saturday"]
		last_scheduled_logged = data["habitById"]["last_scheduled_logged"]
	}

	function daysLeft(someStartDate) {
		let startDate = data["habitById"]["habit_start_date"]

		let today_iso = new Date().toISOString()
		let today = dateHelper.parseISO(today_iso)
		startDate = dateHelper.parseISO(startDate)

		diff = dateHelper.differenceInCalendarDays(
			today,
			startDate
		)

		if (diff >= 30) {
			return 0
		} else if (diff < 30) {
			return 30 - diff
		} 
	}

	function progressBarPercentage() {
		
		let startDate = data["habitById"]["habit_start_date"]

		let today_iso = new Date().toISOString()
		let today = dateHelper.parseISO(today_iso)
		startDate = dateHelper.parseISO(startDate)

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

	function returnDays({sunday, monday, tuesday, wednesday, thursday, friday, saturday}) {
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

		days = days.join(", ")

		return days
	}

	const [deleteHabitMutation, { loadingDeleteHabit, dataDeleteHabit, errorHabitDelete}] = useMutation(
		deleteHabit,
		{
			variables: {
				id: habitId
			},
			onError: (errorHabitDelete) => {
				console.log(errorHabitDelete.graphQLErrors[0].message)
				setError(`${errorHabitDelete.graphQLErrors[0].message}`)
			},
			refetchQueries: [{
				query: habitsByUser,
				variables: {
					id: routeProps.match.params.id.toString()
				}
			}]
		}
	)

	const [createLog, { loadinglogDay, datalogday, error }] = useMutation(
		logHabit,
		{
			variables: {
				id: habitId,
				column: diff,
				current_streak: current_streak,
				last_log: last_log,
				highest_streak: highest_streak,

				habit_start_date: startDate,
				perfect_streak: perfect_streak,
				sunday: sunday,
				monday: monday,
				tuesday: tuesday,
				wednesday: wednesday,
				thursday: thursday,
				friday: friday,
				saturday: saturday,
				last_scheduled_logged: last_scheduled_logged
			},
			onError: (error) => {
				console.log(error)
				setError(`${error}`)
			},
			refetchQueries: [{ query: habitById,
				variables: {
					id: routeProps.match.params.id.toString()
				} }],
		});

	// if (loadinglogDay || loadinglogDay === undefined) {
	// 	// console.log('loading...')
	// } else if (error) {
	// 	console.log(error.message)
	// } else if (datalogday) {
	// 	console.log(datalogday["logDay"])
	// }	


	function handleHabitDelete() {
		deleteHabitMutation()
		routeProps.history.goBack()
	}

	function loggedToday(date) {
		let last_logged = dateHelper.parseISO(date)
		let value = dateHelper.isToday(last_logged)

		return value
	}

	return loading ? (" ") : (
		<div>
			<div className="habit-container">
				<div className="top-buttons">
					<Link to="/home">
						<img src={BackArrowButton} alt="" className="edit-icon" />
					</Link>

					<div>
					<button className="no-margin">
						<Link to={`/edit-habit/${routeProps.match.params.id}`}>
							<img src={EditButton} alt="" className="edit-icon" />
						</Link>
					</button>

					{loggedToday(last_log) 
					? 
					<button className="no-margin" type="button" onClick={() => createLog()}>	
						<img src={CheckmarkButton} alt="" className="edit-icon" />
					</button>
					:
					<button className="no-margin" type="button" onClick={() => createLog()}>
						<img src={NotCheckmarkButton} alt="" className="edit-icon" />
					</button>}
					</div>
				</div>

				<div className="habit-title">
					<div className="no-margin">
						<h2>{data["habitById"]["title"]}</h2>
						<h3>{returnDays(data["habitById"])}</h3>
					</div>
				</div>

				<div className="completion-container">
					<p>{`${daysLeft(data["habitById"]["habit_start_date"])} Days Left`}</p>
					<div className="progress-bar">
						<div className="progress-bar-fill" style={{ 
							width: `${progressBarPercentage()}%`
						}}></div>
					</div>
				</div>

				<div className="habit-stats">
					{/* <div className="stat-box">
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
					</div> */}

					<div className="parent">
						<p>30 days</p>
						<ul className="child">
							<li className={data["habitById"]["day0"] === "true" ? "true item" : "false item"}>
								<p>1</p>
							</li>

							<li className={data["habitById"]["day1"] === "true" ? "true item" : "false item"}>
								<p>2</p>
							</li>

							<li className={data["habitById"]["day2"] === "true" ? "true item" : "false item"}>
								<p>3</p>
							</li>

							<li className={data["habitById"]["day3"] === "true" ? "true item" : "false item"}>
								<p>4</p>
							</li>

							<li className={data["habitById"]["day4"] === "true" ? "true item" : "false item"}>
								<p>5</p>
							</li>

							<li className={data["habitById"]["day5"] === "true" ? "true item" : "false item"}>
								<p>6</p>
							</li>

							<li className={data["habitById"]["day6"] === "true" ? "true item" : "false item"}>
								<p>7</p>
							</li>

							<li className={data["habitById"]["day7"] === "true" ? "true item" : "false item"}>
								<p>8</p>
							</li>

							<li className={data["habitById"]["day8"] === "true" ? "true item" : "false item"}>
								<p>9</p>
							</li>
							<li className={data["habitById"]["day9"] === "true" ? "true item" : "false item"}>
								<p>10</p>
							</li>
							<li className={data["habitById"]["day10"] === "true" ? "true item" : "false item"}>
								<p>11</p>
							</li>

							<li className={data["habitById"]["day11"] === "true" ? "true item" : "false item"}>
								<p>12</p>
							</li>

							<li className={data["habitById"]["day12"] === "true" ? "true item" : "false item"}>
								<p>13</p>
							</li>

							<li className={data["habitById"]["day13"] === "true" ? "true item" : "false item"}>
								<p>14</p>
							</li>

							<li className={data["habitById"]["day14"] === "true" ? "true item" : "false item"}>
								<p>15</p>
							</li>

							<li className={data["habitById"]["day15"] === "true" ? "true item" : "false item"}>
								<p>16</p>
							</li>

							<li className={data["habitById"]["day16"] === "true" ? "true item" : "false item"}>
								<p>17</p>
							</li>

							<li className={data["habitById"]["day17"] === "true" ? "true item" : "false item"}>
								<p>18</p>
							</li>

							<li className={data["habitById"]["day18"] === "true" ? "true item" : "false item"}>
								<p>19</p>
							</li>
							<li className={data["habitById"]["day19"] === "true" ? "true item" : "false item"}>
								<p>20</p>
							</li>
							<li className={data["habitById"]["day20"] === "true" ? "true item" : "false item"}>
								<p>21</p>
							</li>

							<li className={data["habitById"]["day21"] === "true" ? "true item" : "false item"}>
								<p>22</p>
							</li>

							<li className={data["habitById"]["day22"] === "true" ? "true item" : "false item"}>
								<p>23</p>
							</li>

							<li className={data["habitById"]["day23"] === "true" ? "true item" : "false item"}>
								<p>24</p>
							</li>

							<li className={data["habitById"]["day24"] === "true" ? "true item" : "false item"}>
								<p>25</p>
							</li>

							<li className={data["habitById"]["day25"] === "true" ? "true item" : "false item"}>
								<p>26</p>
							</li>

							<li className={data["habitById"]["day26"] === "true" ? "true item" : "false item"}>
								<p>27</p>
							</li>

							<li className={data["habitById"]["day27"] === "true" ? "true item" : "false item"}>
								<p>28</p>
							</li>

							<li className={data["habitById"]["day28"] === "true" ? "true item" : "false item"}>
								<p>29</p>
							</li>
							<li className={data["habitById"]["day29"] === "true" ? "true item" : "false item"}>
								<p>30</p>
							</li>
						</ul>
					</div>

					<div className="stat-box">
						<p>Current Streak</p>
						<p id="stats-box-num">{current_streak}</p>
						<p>days</p>
					</div>

					<div className="stat-box">
						<p>Highest Streak</p>
						<p id="stats-box-num">{highest_streak}</p>
						<p>days</p>
					</div>
				</div>

				<button className="delete-button" onClick={() => handleHabitDelete()}>
					<p>Delete</p>
				</button>
			</div>
		</div>
	);
}