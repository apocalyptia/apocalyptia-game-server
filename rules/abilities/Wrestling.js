const Ability = require('../../classes/Ability.js')

const Wrestling = new Ability({
	name: `Wrestling`,
	desc: [
		`Free Grapple Action once per round.`,
	],
	max: 1,
	experience: 12
})

module.exports = Wrestling