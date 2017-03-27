import * as types from '../constants/games'

export const fetchGames = () => ({
	type : types.FETCH_GAMES
})

export const selectGame = (game) => ({
	type    : types.SELECT_GAME,
	payload : { game }
})

export const filterGamesBy = (key, value) => ({
	type    : types.FILTER_GAMES_BY,
	payload : { key, value }
})

export const removeFilter = () => ({
	type : types.REMOVE_FILTER
})
