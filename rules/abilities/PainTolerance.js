const Ability = require('../../classes/Ability.js')

const PainTolerance = new Ability({
	name: `Pain Tolerance`,
	desc: [
		`Ignore 1 Pain penalty.`,
	],
	max: 3,
	experience: 9
})

module.exports = PainTolerance