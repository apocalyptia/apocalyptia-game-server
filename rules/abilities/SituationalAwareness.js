const Ability = require('../../classes/Ability.js')

const SituationalAwareness = new Ability({
	name: `Situational Awareness`,
	desc: [
		`+1 to Reflexive Defenses.`,
	],
	max: 1,
	experience: 9
})

module.exports = SituationalAwareness