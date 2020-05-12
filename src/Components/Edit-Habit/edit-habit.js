import React, { useState } from 'react';
import { Route, Link, Redirect } from "react-router-dom";

import "./edit-habit.css"
import BackArrowButton from "../../Assets/back.svg"



export default function EditHabit(routeProps) {
	
	


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

	}



	return (
		<div>
			<button onClick={() => routeProps.history.goBack()}>
				<img src={BackArrowButton} alt="" className="edit-icon add-margin" />
			</button>

			<form action="" className="add-habit-form" onSubmit={(e) => handleSubmit(e)}>
				<p>I want to</p>
				<input name="habit" type="text" placeholder="meditate" onChange={(e) => setHabit(e.target.value)} />
				<p>every</p>

				<div>
					<button type="button" value='sunday' className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: sunday ? 'black' : 'white',
						color: sunday ? 'white' : 'black',
						border: sunday ? 'none' : 'none'
					}}>S</button>

					<button type="button" value="monday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: monday ? 'black' : 'white',
						color: monday ? 'white' : 'black',
						border: monday ? 'none' : 'none'
					}}>M</button>

					<button type="button" value="tuesday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: tuesday ? 'black' : 'white',
						color: tuesday ? 'white' : 'black',
						border: tuesday ? 'none' : 'none'
					}}>T</button>

					<button type="button" value="wednesday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: wednesday ? 'black' : 'white',
						color: wednesday ? 'white' : 'black',
						border: wednesday ? 'none' : 'none'
					}}>W</button>

					<button type="button" value="thursday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: thursday ? 'black' : 'white',
						color: thursday ? 'white' : 'black',
						border: thursday ? 'none' : 'none'
					}}>T</button>

					<button type="button" value="friday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: friday ? 'black' : 'white',
						color: friday ? 'white' : 'black',
						border: friday ? 'none' : 'none'
					}}>F</button>

					<button type="button" value="saturday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: saturday ? 'black' : 'white',
						color: saturday ? 'white' : 'black',
						border: saturday ? 'none' : 'none'
					}}>S</button>
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