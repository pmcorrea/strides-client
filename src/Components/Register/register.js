import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./register.css"

export default function Register() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Register</h1>

			<form action="">
				<input type="text" placeholder="username" />
				<input type="password" placeholder="password" />
				<input type="password" placeholder="confirm password" />

				<div>
					<button>
						<Link to="/">
							Go Back
						</Link>
					</button>

					<button>
						<Link to="/">
							Submit
						</Link>
					</button>
				</div>
		</form>
		</div>
	);
}