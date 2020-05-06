import React, { useState } from 'react';
import { Link } from "react-router-dom";


import "./home.css"

export default function Home() {
	// const [count, setCount] = useState(0);

	return (
		<div>
			<ul>
				<li>
					<div className="habit-tool-bar">
						<p>To Do</p>

						<div>
							<button>log</button>
							<button>
								<Link to="/habit">
									...
								</Link>
							</button>
						</div>
					</div>

					<p>everyday</p>
					<div className="progress-bar">
						<div className="progress-bar-fill"></div>
					</div>
				</li>

				<li>
					<div className="habit-tool-bar">
						<p>To Do</p>

						<div>
							<button>log</button>
							<button>
								<Link to="/habit">
									...
								</Link>
							</button>
						</div>
					</div>

					<p>everyday</p>
					<div className="progress-bar">
						<div className="progress-bar-fill"></div>
					</div>
				</li>

				<li>
					<div className="habit-tool-bar">
						<p>To Do</p>

						<div>
							<button>log</button>
							<button>
								<Link to="/habit">
									...
								</Link>
							</button>
						</div>
					</div>

					<p>everyday</p>
					<div className="progress-bar">
						<div className="progress-bar-fill"></div>
					</div>
				</li>

				<li>
					<div className="habit-tool-bar">
						<p>To Do</p>

						<div>
							<button>log</button>
							<button>
								<Link to="/habit">
									...
								</Link>
							</button>
						</div>
					</div>

					<p>everyday</p>
					<div className="progress-bar">
						<div className="progress-bar-fill"></div>
					</div>
				</li>

				<li>
					<div className="habit-tool-bar">
						<p>To Do</p>

						<div>
							<button>log</button>
							<button>
								<Link to="/habit">
									...
								</Link>
							</button>
						</div>
					</div>

					<p>everyday</p>
					<div className="progress-bar">
						<div className="progress-bar-fill"></div>
					</div>
				</li>

				<li>
					<div className="habit-tool-bar">
						<p>To Do</p>

						<div>
							<button>log</button>
							<button>
								<Link to="/habit">
									...
								</Link>
							</button>
						</div>
					</div>

					<p>everyday</p>
					<div className="progress-bar">
						<div className="progress-bar-fill"></div>
					</div>
				</li>

			</ul>
		</div>
	);
}