import React, { useState } from 'react';
import { Link } from "react-router-dom";

import "./login.css"

export default function Login() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<h1>Strides</h1>

			<form action="">
				<input type="text" placeholder="username" />
				<input type="password" placeholder="password" />

					<div>
						<button>
							<Link to="/home">
								Login
							</Link>
						</button>
						<button>
							<Link to="/register">
								Register
							</Link>
						</button>
					</div>
			</form>		
		</div>
	);
}