const Rule = require('../../../classes/Rule.js')

const Shield = new Rule({
	name: `Shield`,
	desc: [
		`Absorption = Size when used as Cover.`,
		`Bonus to Block = Size.`,
	]
})

module.exports = Shield