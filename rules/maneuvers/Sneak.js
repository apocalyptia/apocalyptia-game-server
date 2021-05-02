const Rule = require('../../classes/Rule.js')

const Sneak = new Rule({
	name: `Sneak`, 
	desc: [
		`Roll [Stealth vs Perception] to move Concealed at [Speed / 2].`,
	],
	type: `Defensive`
})

module.exports = Sneak