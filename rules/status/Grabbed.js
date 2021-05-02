const Rule = require('../../classes/Rule.js')

const Grabbed = new Rule({
	name: `Grabbed`,
	desc: [
		`A Grabbed opponent is considered to be Immobilized.`,
	],
	type: `Status`
})

module.exports = Grabbed