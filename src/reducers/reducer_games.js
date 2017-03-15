import batman from '../../img/batman.png'
import bubbleBobble from '../../img/bubble_bobble.png'
import iceClimber from '../../img/ice_climber.png'
import metroid from '../../img/metroid.png'
import punchOut from '../../img/punch_out.png'
import robowarrior from '../../img/robowarrior.png'
import theLegendOfZelda from '../../img/the_legend_of_zelda.png'
import turtlesTheArcadeGame from '../../img/turtles_the_arcade_game.png'

const lorem = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."'

export default function () {
	return [
		{
			title   : 'Batman',
			console : 'NES',
			owned   : 'Yes',
			info    : lorem,
			image   : batman
		},
		{
			title   : 'Bubble Bobble',
			console : 'NES',
			owned   : 'Yes',
			info    : lorem,
			image   : bubbleBobble
		},
		{
			title   : 'Ice Climber',
			console : 'NES',
			owned   : 'Yes',
			info    : 101,
			image   : iceClimber
		},
		{
			title   : 'Metriod',
			console : 'NES',
			owned   : 'Yes',
			info    : 101,
			image   : metroid
		},
		{
			title   : 'Punch Out',
			console : 'NES',
			owned   : 'Yes',
			info    : 101,
			image   : punchOut
		},
		{
			title   : 'RoboWarrior',
			console : 'NES',
			owned   : 'Yes',
			info    : 101,
			image   : robowarrior
		},
		{
			title   : 'The Legend of Zelda',
			console : 'NES',
			owned   : 'Yes',
			info    : 101,
			image   : theLegendOfZelda
		},
		{
			title   : 'Turtles the Arcade Game',
			console : 'NES',
			owned   : 'Yes',
			info    : 101,
			image   : turtlesTheArcadeGame
		},

		// {
		// 	title   : 'Super Metriod',
		// 	console : 'SNES',
		// 	info    : 101,
		// 	image   : ''
		// },
		// {
		// 	title   : 'Super Mario Kart',
		// 	console : 'SNES',
		// 	info    : 101,
		// 	image   : ''
		// },
	]
}
