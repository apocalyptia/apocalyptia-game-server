const Gear = require('../../../classes/Gear.js')
const Camo = require('../../gear/attributes/Camo.js')
const FireResistance = require('../../gear/attributes/FireResistance.js')

const CombatHelmet = new Gear({
	name: `Combat Helmet`,
	sz: 2,
	attr: [
		Camo,
		FireResistance,
	],
	type: `Armor`
})
CombatHelmet.dr = 2
CombatHelmet.loc = `Head`

module.exports = CombatHelmet