import React, { Component } from 'react'

export default class ErrBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			hasError: false
		}
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<h2>Opps!</h2>
			);
		}
		return this.props.children;
	}  
}