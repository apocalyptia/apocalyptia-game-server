const Rule = require('../../classes/Rule.js')

const Trip = new Rule({
	name: `Trip`,
	desc: [
		`Roll [Melee vs Agility] to knock an enemy Prone. 1 Damage.`,
	],
	type: `Offensive`
})

module.exports = Trip