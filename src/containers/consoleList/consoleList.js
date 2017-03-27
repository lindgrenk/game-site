import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { removeFilter, filterGamesBy, fetchGames } from '../../redux/actions/games'

import styles from './consoleList.less'

class ConsoleList extends Component {
	static propTypes = {
		removeFilter  : PropTypes.func,
		filterGamesBy : PropTypes.func,
		games         : PropTypes.array
	}

	onResetClick = (e) => {
		e.preventDefault()

		this.props.removeFilter()
	}

	onFilterClick = (console) => (e) => {
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
			<div className={styles.consoleList}>
				<ul>
					<li onClick={this.onResetClick}>
						All
					</li>

					{this.getConsoles().map((console, index) =>
						<li key={index} onClick={this.onFilterClick(console)}>
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
	filterGamesBy,
	fetchGames,
	removeFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleList)
