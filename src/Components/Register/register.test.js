import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Register from './register';

afterEach(cleanup)

// Snapshot Test
it ('should take a snapshot', () => {
	const { asFragment } = render(
	<BrowserRouter>
			<Register />
	</BrowserRouter>
	)

	expect(asFragment(
		<BrowserRouter>
			<Register />
		</BrowserRouter>)
		).toMatchSnapshot()
})

// Smoke Test
it('renders without crashing', () => {
	const div = document.createElement('div')

	ReactDOM.render(
		<BrowserRouter>
			<Register />
		</BrowserRouter>,
		div
	)
	
	ReactDOM.unmountComponentAtNode(div)
})