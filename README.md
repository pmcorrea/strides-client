# Strides
https://strides.now.sh

## Summary
As the perfect companion for developing new habits, Strides helps users create and track personalized habits for thirty days. As you complete daily logs, Strides automatically updates to determine total logs, perfect streaks, biggest steaks, total of completed habits and present that information to you.

Be the best version of youself and push yourself to achieve perfect streaks.

## Technologies
Strides was developed using React, NodeJS, GraphQL and Postgres. Deployment tools included Vercel and Heroku.
Other notable tools and libraries include: React Hooks, Router and Context, Apollo, and Express.
Testing was faciliated using Testing Library, Chai, and Mocha. Security considerations included implementing
a JWT authorization system with expiring tokens, hashing/salting passwords with bcrypt, sanitizing input with XSS, and CORS for secured headers.

## API
### Endpoints
```
.
├── /graphql
│   └── POST
```

### Types
#### Habit
```
id: { type: GraphQLString },
user_id: { type: GraphQLString },
title: { type: GraphQLString },
sunday: { type: GraphQLString },
monday: { type: GraphQLString },
tuesday: { type: GraphQLString },
wednesday: { type: GraphQLString },
thursday: { type: GraphQLString },
friday: { type: GraphQLString },
saturday: { type: GraphQLString },
last_scheduled_logged: { type: GraphQLString },
logged_on_schedule: { type: GraphQLString },
logged_off_schedule: { type: GraphQLString },
logged_missed: { type: GraphQLString },
logged_total: { type: GraphQLString },
habit_start_date: { type: GraphQLString },
last_log: { type: GraphQLString },
current_streak: { type: GraphQLInt },
highest_streak: { type: GraphQLInt },
perfect_streak: { type: GraphQLString },
day0: { type: GraphQLString },
day1: { type: GraphQLString },
day2: { type: GraphQLString },
day3: { type: GraphQLString },
day4: { type: GraphQLString },
day5: { type: GraphQLString },
day6: { type: GraphQLString },
day7: { type: GraphQLString },
day8: { type: GraphQLString },
day9: { type: GraphQLString },
day10: { type: GraphQLString },
day11: { type: GraphQLString },
day12: { type: GraphQLString },
day13: { type: GraphQLString },
day14: { type: GraphQLString },
day15: { type: GraphQLString },
day16: { type: GraphQLString },
day17: { type: GraphQLString },
day18: { type: GraphQLString },
day19: { type: GraphQLString },
day20: { type: GraphQLString },
day21: { type: GraphQLString },
day22: { type: GraphQLString },
day23: { type: GraphQLString },
day24: { type: GraphQLString },
day25: { type: GraphQLString },
day26: { type: GraphQLString },
day27: { type: GraphQLString },
day28: { type: GraphQLString },
day29: { type: GraphQLString }
```
##### Habit
```
id: { type: GraphQLString },
user_name: { type: GraphQLString },
user_password: { type: GraphQLString },
avatar: { type: GraphQLString },
logged_total: { type: GraphQLString },
perfect_habits: { type: GraphQLString },
biggest_streak: { type: GraphQLString },
habits_done: { type: GraphQLString }
```

##### Login
```
id: { type: GraphQLString },
user_name: { type: GraphQLString },
user_password: { type: GraphQLString },
token: { type: GraphQLString }
```

### Queries
#### getUserByName
```
query getUserByName($user_name: String!){
		getUserByName(user_name: $user_name) {
			user_name
		}
	}
```

## Screenshots
<img src="https://live.staticflickr.com/65535/49898909472_11d43fc3e6.jpg" width="231" height="500" alt="IMG_4768">
<img src="https://live.staticflickr.com/65535/49898909447_b73eeccd01.jpg" width="231" height="500" alt="IMG_4769">
<img src="https://live.staticflickr.com/65535/49898909427_12195cc9d0.jpg" width="231" height="500" alt="IMG_4770">
<img src="https://live.staticflickr.com/65535/49898909532_fa0e703eac.jpg" width="231" height="500" alt="IMG_4767">

## Credits
Images and assests are credited to Pexels, Flat-Icon, Freepic, and Luis Quintero (https://www.pexels.com/@jibarofoto)

## Usage
Not intended for personal or commerical use. Use at your own risk. 
