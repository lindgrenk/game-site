import React, { Component } from 'react'

import { SearchBar, GameList, GameDetail } from '../../containers'

import styles from './app.less'

class App extends Component {
	render() {
		return (
			<div className={styles.main}>
				<SearchBar />
				<div className={styles.container}>
					<GameDetail />
					<GameList />
				</div>
			</div>
		)
	}
}

export default App
