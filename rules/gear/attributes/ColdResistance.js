const Rule = require('../../../classes/Rule.js')

const ColdResistance = new Rule({
	name: `Cold Resistance`,
	desc: [
		`Delay Hypothermia for 1hr per Armor Absorption.`,
	]
})

module.exports = ColdResistance