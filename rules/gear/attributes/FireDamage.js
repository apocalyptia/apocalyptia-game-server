const Rule = require('../../../classes/Rule.js')

const FireDamage = new Rule({
	name: `Fire Damage`,
	desc: [
		`Fire Damage can only be prevented with Fire Resistant Armor.`,
	]
})

module.exports = FireDamage