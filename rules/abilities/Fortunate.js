const Ability = require('../../classes/Ability.js')

const Fortunate = new Ability({
	name: `Fortunate`,
	desc: [
		`+1 Luck.`,
	],
	max: 1,
	experience: 9
})

module.exports = Fortunate