import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./add-habit.css"

export default function AddHabit() {
	const [habit, setHabit] = useState('');

	const [sunday, setSunday] = useState(false);
	const [monday, setMonday] = useState(false);
	const [tuesday, setTuesday] = useState(false);
	const [wednesday, setWednesday] = useState(false);
	const [thursday, setThursday] = useState(false);
	const [friday, setFriday] = useState(false);
	const [saturday, setSaturday] = useState(false);

	function changeDay(value) {
		if (value === 'sunday') {
			setSunday(!sunday)
		}

		if (value === 'monday') {
			setMonday(!monday)
		}

		if (value === 'tuesday') {
			setTuesday(!tuesday)
		}

		if (value === 'wednesday') {
			setWednesday(!wednesday)
		}

		if (value === 'thursday') {
			setThursday(!thursday)
		}

		if (value === 'friday') {
			setFriday(!friday)
		}

		if (value === 'saturday') {
			setSaturday(!saturday)
		}
	}

	function handleSubmit(e) {
		e.preventDefault()

		let body ={
			habit: habit,
			days: [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
		}

		console.log(body)
	}

	return (
		<div>
			<form action="" className="add-habit-form" onSubmit={(e) => handleSubmit(e)}>
				<p>I want to</p>
				<input name="habit" type="text" placeholder="meditate" onChange={(e) => setHabit(e.target.value)}/>
					<p>every</p>

					<div>
					<button type="button" value='sunday' className="circle-button-s" onClick={(e) => changeDay(e.target.value)}>S</button>
					<button type="button" value="monday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)}>M</button>
					<button type="button" value="tuesday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)}>T</button>
					<button type="button" value="wednesday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)}>W</button>
					<button type="button" value="thursday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)}>T</button>
					<button type="button" value="friday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)}>F</button>
					<button type="button" value="saturday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)}>S</button>
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