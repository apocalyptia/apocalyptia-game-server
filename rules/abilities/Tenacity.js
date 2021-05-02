const Ability = require('../../classes/Ability.js')

const Tenacity = new Ability({
	name: `Tenacity`,
	desc: [
		`Reduce any Trauma by 1.`
	],
	max: 3,
	experience: 9
})

module.exports = Tenacity