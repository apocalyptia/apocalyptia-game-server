const Rule = require('../../../classes/Rule.js')

const Camo = new Rule({
	name: `Camo`,
	desc: [
		`+1 Stealth per Body Part when in a given Biome.`,
	]
})

module.exports = Camo