const Ability = require('../../classes/Ability.js')

const HardHeaded = new Ability({
	name: `Hard Headed`,
	desc: [
		`Ignore Stun effect from Head Damage.`,
	],
	max: 1,
	experience: 15
})

module.exports = HardHeaded