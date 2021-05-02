const Rule = require('../../classes/Rule.js')

const Harmless = new Rule({
	name: `Harmless`,
	desc: [
		`You cannot Attack.`,
	],
	type: `Status`
})

module.exports = Harmless