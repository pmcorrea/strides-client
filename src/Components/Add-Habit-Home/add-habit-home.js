import React, { useState } from 'react';
import { useMutation } from '@apollo/client'
import { addHabit, habitsByUser } from "../../Queries/queries"

import ErrBoundary from "../ErrBoundary/err-boundary"

import "./add-habit-home.css"
const xss = require('xss')

export default function AddHabitHome(routeProps) {
	const [habit, setHabit] = useState('');

	const [sunday, setSunday] = useState(false);
	const [monday, setMonday] = useState(false);
	const [tuesday, setTuesday] = useState(false);
	const [wednesday, setWednesday] = useState(false);
	const [thursday, setThursday] = useState(false);
	const [friday, setFriday] = useState(false);
	const [saturday, setSaturday] = useState(false);

	const [createHabit, {data, error}] = useMutation(
		addHabit,
		{
			variables: {
				title: habit,
				sunday: sunday, 
				monday: monday, 
				tuesday: tuesday,
				wednesday: wednesday,
				thursday: thursday,
				friday: friday,
				saturday: saturday,
			},
			onError: (error) => {
				console.log('Strides Error:', error.graphQLErrors[0].message)
			},
			refetchQueries: [{ query: habitsByUser }],
		}
	)

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

	if (error) {
		console.error('Strides Error:', error.graphQLErrors[0].message)
	} else if (data) {
		routeProps.history.push("/home")
	}

	function handleSubmit(e) {
		e.preventDefault()
		createHabit()
		routeProps.history.goBack()
	}

	return (
		<div className={routeProps.className ? "render-on-desktop" : ""}>
		<ErrBoundary>
			<form action="" className="add-habit-form" onSubmit={(e) => handleSubmit(e)}>
				<p>I want to</p>
				<input name="habit" type="text" placeholder="meditate" onChange={(e) => setHabit(xss(e.target.value.toString()))}/>
					<p>every</p>

					<div>
					<button type="button" value='sunday' className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: sunday ? 'var(--custom-darkblue)' : 'var(--custom-orange)',
						color: sunday ? 'white' : 'black',
						border: sunday ? 'none': 'none'
					}}>S</button>

					<button type="button" value="monday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: monday ? 'var(--custom-darkblue)' : 'var(--custom-orange)',
						color: monday ? 'white' : 'black',
						border: monday ? 'none' : 'none'
					}}>M</button>

					<button type="button" value="tuesday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: tuesday ? 'var(--custom-darkblue)' : 'var(--custom-orange)',
						color: tuesday ? 'white' : 'black',
						border: tuesday ? 'none' : 'none'
					}}>T</button>

					<button type="button" value="wednesday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: wednesday ? 'var(--custom-darkblue)' : 'var(--custom-orange)',
						color: wednesday ? 'white' : 'black',
						border: wednesday ? 'none' : 'none'
					}}>W</button>

					<button type="button" value="thursday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: thursday ? 'var(--custom-darkblue)' : 'var(--custom-orange)',
						color: thursday ? 'white' : 'black',
						border: thursday ? 'none' : 'none'
					}}>T</button>

					<button type="button" value="friday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: friday ? 'var(--custom-darkblue)' : 'var(--custom-orange)',
						color: friday ? 'white' : 'black',
						border: friday ? 'none' : 'none'
					}}>F</button>

					<button type="button" value="saturday" className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: saturday ? 'var(--custom-darkblue)' : 'var(--custom-orange)',
						color: saturday ? 'white' : 'black',
						border: saturday ? 'none' : 'none'
					}}>S</button>
					</div>
					<p>for 30 days</p>

					
						<button type="submit">
								Submit
						</button>
					
			</form>
		</ErrBoundary>
		</div>
	);
}