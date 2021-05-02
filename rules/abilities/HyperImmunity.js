const Ability = require('../../classes/Ability.js')

const HyperImmunity = new Ability({
	name: `Hyper Immunity`,
	desc: [
		`+1 to resist Diseases.`,
	],
	max: 3,
	experience: 3
})

module.exports = HyperImmunity