const Rule = require('../../classes/Rule.js')

const Defenseless = new Rule({
	name: `Defenseless`,
	desc: [
		`You must use a Reflexive Defense.`,
		`Use your Block score against Melee Attacks and you Dodge score against Projectile Attacks.`,
	],
	type: `Status`
})

module.exports = Defenseless