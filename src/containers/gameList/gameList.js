import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchGames, selectGame } from '../../redux/actions/games'

import styles from './gameList.less'

class GameList extends Component {
	static propTypes = {
		fetchGames : PropTypes.func.isRequired,
		selectGame : PropTypes.func.isRequired,
		isLoaded   : PropTypes.bool,
		games      : PropTypes.array
	}

	componentWillMount() {
		this.props.fetchGames()
	}

	onClick = (game) => (e) => {
		e.preventDefault()

		this.props.selectGame(game)
	}

	render() {
		if (!this.props.isLoaded) {
			return <p>Loading...</p>
		}

		return (
			<div className={styles.gameList}>
				<ul>
					{this.props.games.map((game, index) => (
						<li
							key={index}
							onClick={this.onClick(game)}
						>
							{game.title}
						</li>
					))}
				</ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isLoaded : state.games.isLoaded,
	games    : state.games.visibleGames
})

const mapDispatchToProps = {
	fetchGames,
	selectGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)
