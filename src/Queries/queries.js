import { gql } from 'apollo-boost'

const getUserByName = gql`
	query getUserByName($user_name: String!){
		getUserByName(user_name: $user_name) {
			user_name
		}
	}
`

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
			perfect_streak
			last_scheduled_logged
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
			last_log
			current_streak
			highest_streak
			perfect_streak
			last_scheduled_logged
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
		sunday
		monday
		tuesday
		wednesday
		thursday
		friday
		saturday
		current_streak
		last_log
		highest_streak
		habit_start_date
		perfect_streak
		last_scheduled_logged
	}
}
`

const loginUser = gql`
query loginUser($user_name: String!, $user_password: String!) {
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
	mutation logHabit($id: String!, $column: String!, $current_streak: Int!, $last_log: String, $highest_streak: Int!,
		$habit_start_date: String!, $perfect_streak: String, $last_scheduled_logged: String, $sunday: String!, $monday: String!, $tuesday: String!, $wednesday: String!, $thursday: String!, $friday: String!, $saturday: String!) {
		logHabit(id: $id, column: $column, current_streak: $current_streak, last_log: $last_log, highest_streak: $highest_streak,
			habit_start_date: $habit_start_date, perfect_streak: $perfect_streak, last_scheduled_logged: $last_scheduled_logged, sunday: $sunday, monday: $monday, tuesday: $tuesday, wednesday: $wednesday, thursday: $thursday, friday: $friday, saturday: $saturday) {
			id
			title
		}
	}
`

const deleteHabit = gql`
	mutation deleteHabit($id: String!) {
		deleteHabit(id: $id) {
			id
			title
		}
	}
`

const editHabit = gql`
	mutation editHabit(
		$title: String!, 
		$sunday: Boolean!,
		$monday: Boolean!,
		$tuesday: Boolean!,
		$wednesday: Boolean!,
		$thursday: Boolean!,
		$friday: Boolean!,
		$saturday: Boolean!) {
			editHabit(
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

const userById = gql`
	query userById {
		userById {
			user_name
			avatar
			logged_total
			habits_done
			perfect_habits 
			biggest_streak
		}
	}
`

const logged_total = gql`
	mutation logged_total($value: String!) {
		logged_total(value: $value) {
			id
			user_name
			logged_total
		}
	}
`

const perfect_habits = gql`
	mutation perfect_habits($value: String!) {
		perfect_habits(value: $value) {
			id
			user_name
			perfect_habits
		}
	}
`

const biggest_streak = gql`
	mutation biggest_streak($value: String!) {
		biggest_streak(value: $value) {
			id
			user_name
			biggest_streak
		}
	}
`

const habits_done = gql`
	mutation habits_done($value: String!) {
		habits_done(value: $value) {
			id
			user_name
			habits_done
		}
	}
`

export {
	habits, habitsByUser, loginUser, addUser, addHabit, habitById, logHabit,
	deleteHabit, editHabit, userById, habits_done, perfect_habits, biggest_streak, logged_total, getUserByName
}