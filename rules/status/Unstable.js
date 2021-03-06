const Rule = require('../../classes/Rule.js')

const Unstable = new Rule({
	name: `Unstable`,
	desc: [
		`-3 penalty to Agility or Constitution Skill rolls.`,
		`Projectile Attacks targeting you take a -3 penalty.`,
	],
	type: `Status`
})

module.exports = Unstable