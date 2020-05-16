import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AddHabit from './add-habit';

import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from "apollo-link-context";
import TokenHelpers from "../../Services/token-helpers"
import config from '../../config'

// Apollo Link will send token with every request
const authLink = setContext((_, { headers }) => {
	const token = TokenHelpers.getAuthToken()
	return {
		headers: {
			...headers,
			authorization: token ? `bearer ${token}` : null,
		}
	}
})

const httpLink = new createHttpLink({ uri: `${config.API_ENDPOINT}` })

// Instantiate Apollo Client
const apolloClient = new ApolloClient({
	cache: new InMemoryCache(),
	link: authLink.concat(httpLink)
})

afterEach(cleanup)

// Snapshot Test
it('should take a snapshot', () => {
	const { asFragment } = render(
		<ApolloProvider client={apolloClient}>
	<BrowserRouter>
			<AddHabit />
	</BrowserRouter>
	 </ApolloProvider >
	)

	expect(asFragment(
		<ApolloProvider client={apolloClient}>
		<BrowserRouter>
			<AddHabit />
		</BrowserRouter>
		</ApolloProvider>)
		).toMatchSnapshot()
})

// Smoke Test
it('renders without crashing', () => {
	const div = document.createElement('div')

	ReactDOM.render(
		<ApolloProvider client={apolloClient}>
		<BrowserRouter>
			<AddHabit />
		</BrowserRouter>
		</ApolloProvider>,
		div
	)
	
	ReactDOM.unmountComponentAtNode(div)
})