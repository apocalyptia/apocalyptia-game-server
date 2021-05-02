const Gear = require('../../../classes/Gear.js')
const ColdResistance = require('../../gear/attributes/ColdResistance.js')
const FireResistance = require('../../gear/attributes/FireResistance.js')

const KevlarVest = new Gear({
	name: `Kevlar Vest`,
	sz: 3,
	attr: [
		ColdResistance,
		FireResistance,
	],
	type: `Armor`
})
KevlarVest.dr = 2
KevlarVest.loc = `Torso`

module.exports = KevlarVest