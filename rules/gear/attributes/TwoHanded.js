const Rule = require('../../../classes/Rule.js')

const TwoHanded = new Rule({
	name: `2h`,
	desc: [
		`Normally used two-handed.`,
		`Can be used one-handed at a penalty = Size.`,
	]
})

module.exports = TwoHanded