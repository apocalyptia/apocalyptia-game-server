const Ability = require('../../classes/Ability.js')

const Sidestep = new Ability({
	name: `Side-step`,
	desc: [
		`Free Dodge Action once per round.`,
	],
	max: 1,
	experience: 12
})

module.exports = Sidestep