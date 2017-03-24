import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { filterGamesBy } from '../../redux/actions/games'

class ConsoleList extends Component {
	static propTypes = {
		filterGamesBy : PropTypes.func,
		games         : PropTypes.array
	}

	onClick = (console) => (e) => {
		e.preventDefault()

		this.props.filterGamesBy('console', console)
	}

	getConsoles = () => {
		const consoles = []

		this.props.games.forEach(game => {
			if (consoles.indexOf(game.console) === -1) {
				consoles.push(game.console)
			}
		})

		return consoles
	}

	render() {
		return (
			<div>
				<ul>
					{this.getConsoles().map((console, index) =>
						<li key={index} onClick={this.onClick(console)}>
							{console}
						</li>
					)}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	games : state.games.games
})

const mapDispatchToProps = {
	filterGamesBy
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleList)
