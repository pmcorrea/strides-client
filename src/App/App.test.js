import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)

// Snapshot Test
it ('should take a snapshot', () => {
  const { asFragment } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
    )

  expect(asFragment(
  <BrowserRouter>
    <App />
  </BrowserRouter>)).toMatchSnapshot()
})

// Smoke Test
it('renders without crashing', () => {
  const div = document.createElement('div')

  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})