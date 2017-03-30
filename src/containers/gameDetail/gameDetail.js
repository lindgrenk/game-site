import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import styles from './gameDetail.less'

class GameDetail extends Component {
	static propTypes = {
		game : PropTypes.object
	}

	render() {
		if (!this.props.game) {
			return <div className={styles.gameDetail}></div>
		}

		return (
			<div className={styles.gameDetail}>
				<ul className={styles.gameListInfo}>
					<li>Title: {this.props.game.title}</li>
					<li>Console: {this.props.game.console}</li>
					<li>Year: {this.props.game.year}</li>
					<li>Owned: {this.props.game.owned}</li>
					<li>Info: {this.props.game.info}</li>
				</ul>

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
