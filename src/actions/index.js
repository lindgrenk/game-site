export const GAME_SELECTED = 'GAME_SELECTED'

export function selectGame(game) {
	return {
		type    : GAME_SELECTED,
		payload : game
	}
}
