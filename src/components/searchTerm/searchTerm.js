import React, { Component, PropTypes } from 'react'

class SearchTerm extends Component {
	static propTypes = {
		result : PropTypes.string
	}

	render() {
		return <h4>{this.props.result}</h4>
	}
}

export default SearchTerm
