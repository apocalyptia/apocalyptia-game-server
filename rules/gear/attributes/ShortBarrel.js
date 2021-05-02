const Rule = require('../../../classes/Rule.js')

const ShortBarrel = new Rule({
	name: `Short-Barrel`,
	desc: [
		`[Range / 2] and [Size / 2] (round up).`,
	]
})

module.exports = ShortBarrel