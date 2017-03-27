import * as types from '../constants/games'

import config from '../../config'

const initialState = {
	isLoaded     : false,
	games        : [],
	visibleGames : [],
	game         : null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_GAMES :
			return {
				...state,
				isLoaded     : true,
				games        : config.games,
				visibleGames : config.games
			}

		case types.SELECT_GAME :
			return {
				...state,
				game : action.payload.game
			}

		case types.FILTER_GAMES_BY :
			return {
				...state,
				visibleGames : state.games.filter(game => game[action.payload.key].includes(action.payload.value))
			}

		case types.REMOVE_FILTER :
			return {
				...state,
				visibleGames : state.games
			}

		default :
			return state
	}
}
