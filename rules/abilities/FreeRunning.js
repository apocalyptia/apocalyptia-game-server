const Ability = require('../../classes/Ability.js')

const FreeRunning = new Ability({
	name: `Free Running`,
	desc: [
		`Acrobatics 9# to Climb your Speed as a Movement action.`,
	],
	max: 1,
	experience: 9
})

module.exports = FreeRunning