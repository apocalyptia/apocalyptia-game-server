const Rule = require('../../../classes/Rule.js')

const FireResistance = new Rule({
	name: `Fire Resistance`,
	desc: [
		`Armor Absorption reduces Fire Damage.`,
	]
})

module.exports = FireResistance