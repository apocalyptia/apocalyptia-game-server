const Rule = require('../../../classes/Rule.js')

const Slow = new Rule({
	name: `Slow`,
	desc: [
		`Penalty to Speed = Size.`,
	]
})

module.exports = Slow