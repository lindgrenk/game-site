import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { selectGame } from '../../actions/index'

import styles from './gameList.less'

class GameList extends Component {
	static propTypes = {
		games      : PropTypes.object,
		selectGame : PropTypes.func
	}

	onClick = (game) => (e) => {
		e.preventDefault()

		this.props.selectGame(game)
	}

	render() {
		return (
			<div className={styles.gameList}>
				<ul>
					{this.props.games.map((game) => (
						<li
							key={game.title}
							className=""
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
	games : state.games
})

const mapDispatchToProps = {
	selectGame
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList)
