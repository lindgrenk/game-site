import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { SearchTerm } from '../../components'

import styles from './searchBar.less'

class SearchBar extends Component {
	static propTypes = {
	}

	constructor(props) {
		super(props)

		this.state = {
			term : ''
		}
	}

	onInputChange = (event) => {
		this.setState({ [event.target.name] : event.target.value })
	}

	onSubmit = (event) => {
		event.preventDefault()

		this.setState({ term : '' })
	}

	render() {
		return (
			<form className={styles.searchBar} onSubmit={this.onSubmit}>
				<input
					className=""
					name="term"
					placeholder="Search for a game"
					value={this.state.term}
					onChange={this.onInputChange}
				/>

				<button className="">Search</button>

				<SearchTerm result={this.state.term} />
			</form>
		)
	}
}

const mapDispatchToProps = {}

export default connect(null, mapDispatchToProps)(SearchBar)
