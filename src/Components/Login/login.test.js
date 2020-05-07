import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Login from './login';

afterEach(cleanup)

// Snapshot Test
it ('should take a snapshot', () => {
	const { asFragment } = render(
	<BrowserRouter>
			<Login />
	</BrowserRouter>
	)

	expect(asFragment(
		<BrowserRouter>
				<Login />
		</BrowserRouter>)
		).toMatchSnapshot()
})

// Smoke Test
it('renders without crashing', () => {
	const div = document.createElement('div')

	ReactDOM.render(
		<BrowserRouter>
				<Login />
		</BrowserRouter>,
		div
	)
	
	ReactDOM.unmountComponentAtNode(div)
})

// Header Contents
it('should check header contents', () => {
	const { getByTestId } = render(
		<BrowserRouter>
			<Login />
		</BrowserRouter>
	)
	const element = getByTestId('login-h1-test-container')
	expect(element).toHaveTextContent('Strides')
})