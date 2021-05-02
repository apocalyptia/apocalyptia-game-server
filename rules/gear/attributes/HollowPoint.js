const Rule = require('../../../classes/Rule.js')

const HollowPoint = new Rule({
	name: `Hollow Point`,
	desc: [
		`+1 Damage.`,
		`-1 Penetration.`
	]
})

module.exports = HollowPoint