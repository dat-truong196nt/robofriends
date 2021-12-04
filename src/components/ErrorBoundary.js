import React, { Component } from 'react'


class ErrorBoundary extends Component {
	constructor() {
		super();
		this.state = {
			hasError: false,
		}
	}

	componentDidCatch(err, info) {
		this.setState({hasError: true});
	}

	render() {
		return this.state.hasError ?
			<h1>Opp smthing wrong</h1> :
			this.props.children;
	}
}

export default ErrorBoundary;