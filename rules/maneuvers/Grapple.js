const Rule = require('../../classes/Rule.js')
const Grab = require('./Grab.js')
const Hostage = require('./Hostage.js')
const Tackle = require('./Tackle.js')
const Throw = require('./Throw.js')

const Grapple = new Rule({
	name: `Grapple`,
	desc: [
		`There are three steps to Grappling:`,
		`1) Grab`,
		`2) Restrain`,
		`3) Pin`,
		`To Grapple an opponent, you must have at least one free hand and make a Melee(Unarmed) Attack roll, which does no Damage.`,
		`With a Successful Grapple roll, that combatant may alter the current Grapple step by 1.`,
		`With each new Grapple roll, the difference between the combatants' results is a modifier to the Attacker's next Grapple roll.`,
		`Each round the Attacker must choose to either spend 1 Action just to retain the Grapple, make another Grapple roll, or let go.`,
		`When the Defender reduces the Grapple step to 0 they escape.`,
	],
	type: `Offensive`
})

Grapple.subrules = [
	Grab,
	Hostage, 
	Tackle, 
	Throw
]

module.exports = Grapple