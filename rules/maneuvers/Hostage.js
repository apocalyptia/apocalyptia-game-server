const Rule = require('../../classes/Rule.js')

const Hostage = new Rule({
	name: `Hostage`,
	desc: [
		`Use a Grabbed or Restrained enemy as Cover.`,
		`The Grappled enemy's Absorption acts as the Material Absorption and any excess Damage is applied to the Grappled enemy instead of you.`,
		`If the Damage is enough to kill the Grappled enemy, any excess Damage passes through to you.`,
		`This does not make you Concealed.`,
	],
	type: `Offensive`
})

module.exports = Hostage