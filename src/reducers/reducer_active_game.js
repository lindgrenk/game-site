// State argument is not application state, only the state
// this reducer is responsible for
import { GAME_SELECTED } from '../actions/index'

export default function (state = null, action) {
	switch (action.type) {
		case GAME_SELECTED:
			return action.payload
	}

	return state
}
