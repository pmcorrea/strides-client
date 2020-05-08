import React, { useState } from 'react';
import { Link } from "react-router-dom";

import HomeIcon from "../../Assets/home-icon.svg"
import PlusIcon from "../../Assets/plus-icon.svg"
import ProfileIcon from "../../Assets/profile-icon.svg"



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

			<div className="bottom-toolbar">
				<button>
					<Link to="/home">
						<img src={HomeIcon} alt="" className="icon-bar-icon" />
					</Link>
				</button>

				<button>
					<Link to="/add-habit">
						<img src={PlusIcon} alt="" className="icon-bar-icon" />
					</Link>
				</button>

				<button>
					<Link to="/profile">
						<img src={ProfileIcon} alt="" className="icon-bar-icon" />
					</Link>
				</button>
			</div>	
		</div>
	);
}