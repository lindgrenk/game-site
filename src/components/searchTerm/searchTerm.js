import React, { Component, PropTypes } from 'react'

class SearchTerm extends Component {
	static propTypes = {
		result : PropTypes.string
	}

	render() {
		return <h2>{this.props.result}</h2>
	}
}

export default SearchTerm
