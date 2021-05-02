const Rule = require('../../classes/Rule.js')

const Immobilized = new Rule({
	name: `Immobilized`,
	desc: [
		`Your Speed is temporarily considered to be 0.`
	],
	type: `Status`
})

module.exports = Immobilized