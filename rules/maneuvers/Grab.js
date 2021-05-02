const Rule = require('../../classes/Rule.js')

const Grab = new Rule({
	name: `Grab`,
	desc: [
		`Roll [Melee(Unarmed) vs DEF] to impose the 'Grabbed' Status.`,
	],
	type: `Offensive`
})

module.exports = Grab