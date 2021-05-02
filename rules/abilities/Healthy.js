const Ability = require('../../classes/Ability.js')

const Healthy = new Ability({
	name: `Healthy`,
	desc: [
		`+1 Health for each Body Part.`,
	],
	max: 3,
	experience: 24
})

module.exports = Healthy