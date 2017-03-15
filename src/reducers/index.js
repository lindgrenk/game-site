import { combineReducers } from 'redux'
import GamesReducer from './reducer_games'
import ActiveGame from './reducer_active_game'

const rootReducer = combineReducers({
	games      : GamesReducer,
	activeGame : ActiveGame,
})

export default rootReducer
