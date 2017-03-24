import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import styles from './gameDetail.less'

class GameDetail extends Component {
	static propTypes = {
		game : PropTypes.object
	}

	render() {
		if (!this.props.game) {
			return <div className={styles.gameDetail}>Welcome to the game list</div>
		}

		return (
			<div className={styles.gameDetail}>
				<div className={styles.gameListInfo}>
					<div>Title: {this.props.game.title}</div>
					<div>Console: {this.props.game.console}</div>
					<div>Owned: {this.props.game.owned}</div>
					<div>Info: <br /> {this.props.game.info}</div>
				</div>

				<div>
					<img src={this.props.game.image} />
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	game : state.games.game
})

export default connect(mapStateToProps)(GameDetail)
