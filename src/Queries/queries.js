import { gql } from 'apollo-boost'

const habits = gql`
	{
		habits {
			title
			id
			userid
			title
			sunday
			monday
			tuesday
			wednesday
			thursday
			friday
			saturday
			logged_on_schedule
			logged_off_schedule
			logged_missed
			logged_total
			habit_start_date
			day0
			day1
			day2
			day3
			day4
			day5
			day6
			day7
			day8
			day9
			day10
			day11
			day12
			day13
			day14
			day15
			day16
			day17
			day18
			day19
			day20
			day21
			day22
			day23
			day24
			day25
			day26
			day27
			day28
			day29
		}
	}
`

const habitById = gql`
query habitById ($id: String!){
		habitById(id: $id) {
			title
			id
			user_id
			title
			sunday
			monday
			tuesday
			wednesday
			thursday
			friday
			saturday
			logged_on_schedule
			logged_off_schedule
			logged_missed
			logged_total
			habit_start_date
			day0
			day1
			day2
			day3
			day4
			day5
			day6
			day7
			day8
			day9
			day10
			day11
			day12
			day13
			day14
			day15
			day16
			day17
			day18
			day19
			day20
			day21
			day22
			day23
			day24
			day25
			day26
			day27
			day28
			day29
		}
	}
`

const habitsByUser = gql`
query habitsByUser{
	habitsByUser {
		id
    	title
	}
}
`

const loginUser = gql`
query loginUser($user_name: String, $user_password: String) {
	loginUser(user_name: $user_name, user_password: $user_password) {
		id
		user_name
		token
	}
}
`

const addUser = gql`
mutation addUser($user_name: String!, $user_password: String!) {
	addUser(user_name: $user_name, user_password: $user_password) {
		id
		user_name
	}
}
`

const addHabit = gql`
	mutation addHabit(
		$title: String!, 
		$sunday: Boolean!,
		$monday: Boolean!,
		$tuesday: Boolean!,
		$wednesday: Boolean!,
		$thursday: Boolean!,
		$friday: Boolean!,
		$saturday: Boolean!) {
			addHabit(
				title: $title,
				sunday: $sunday,
				monday: $monday,
				tuesday: $tuesday,
				wednesday: $wednesday,
				thursday: $thursday,
				friday: $friday,
				saturday: $saturday
					) {
						id
						title
					}
	}
`

const logHabit = gql`
mutation logHabit($id: String!, $column: String!) {
	logHabit(id: $id, column: $column) {
		id
		title
	}
}
`

export {
	habits, habitsByUser, loginUser, addUser, addHabit, habitById, logHabit
}