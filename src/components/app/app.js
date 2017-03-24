import React, { Component } from 'react'

import { ConsoleList, SearchBar, GameList, GameDetail } from '../../containers'

import styles from './app.less'

class App extends Component {
	render() {
		return (
			<div className={styles.main}>
				<ConsoleList />

				<SearchBar />

				<div className={styles.container}>
					<GameList />
					<GameDetail />
				</div>
			</div>
		)
	}
}

export default App
