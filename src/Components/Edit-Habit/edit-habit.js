import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { deleteHabit, habitsByUser, addHabit } from "../../Queries/queries";
import ErrBoundary from "../ErrBoundary/err-boundary"
import "./edit-habit.css";
import BackArrowButton from "../../Assets/back.svg";



export default function EditHabit(routeProps) {
	const [habit, setHabit] = useState('');
	const [sunday, setSunday] = useState(false);
	const [monday, setMonday] = useState(false);
	const [tuesday, setTuesday] = useState(false);
	const [wednesday, setWednesday] = useState(false);
	const [thursday, setThursday] = useState(false);
	const [friday, setFriday] = useState(false);
	const [saturday, setSaturday] = useState(false);

	let habitId = routeProps.match.params.id

	const [deleteHabitMutation] = useMutation(
		deleteHabit,
		{
			variables: {
				id: habitId
			},
			onError: (err) => {
				// console.log('Err', err.graphQLErrors[0].message)
			},
			refetchQueries: [{
				query: habitsByUser
			}]
		}
	)

	const [createHabit, { errorCreateHabit }] = useMutation(
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
			onError: (err) => {
				console.log('Err', errorCreateHabit.graphQLErrors[0].message)
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

	function handleSubmit(e) {
		e.preventDefault()
		deleteHabitMutation()
		createHabit()
		routeProps.history.push("/home")
	}

	return (
		<div>
			<ErrBoundary>
			<button class="noBorderNoBackground" onClick={() => routeProps.history.goBack()}>
				<img src={BackArrowButton} alt="" className="edit-icon add-margin" />
			</button>

			<form action="" className="add-habit-form" onSubmit={(e) => handleSubmit(e)}>
				<p>I want to</p>
				<input name="habit" type="text" placeholder="meditate" onChange={(e) => setHabit(e.target.value)} />
				<p>every</p>

				<div>
					<button type="button" value='sunday' className="circle-button-s" onClick={(e) => changeDay(e.target.value)} style={{
						backgroundColor: sunday ? 'var(--custom-darkblue)' : 'var(--custom-orange)',
						color: sunday ? 'white' : 'black',
						border: sunday ? 'none' : 'none'
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