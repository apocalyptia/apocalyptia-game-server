const Rule = require('../../../classes/Rule.js')

const Scatter = new Rule({
	name: `Scatter`,
	desc: [
		`Range penalties apply to Damage instead of Attack.`,
		`-1 Penetration.`
	]
})

module.exports = Scatter