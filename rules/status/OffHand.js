const Rule = require('../../classes/Rule.js')

const OffHand = new Rule({
	name: `Off-Hand`,
	desc: [
		`-3 penalty to Attack with your Off-Hand.`,
	],
	type: `Status`
})

module.exports = OffHand