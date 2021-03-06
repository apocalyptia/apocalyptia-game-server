const Rule = require('../../../classes/Rule.js')

const Blast = new Rule({
	name: `Blast`,
	desc: [
		`Roll [d6 vs Reflexive Dodge] against everyone in the Blast radius.`,
		`[Damage / 2] on a miss (minimum 1).`,
	]
})

module.exports = Blast