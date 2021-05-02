const Gear = require('../../../classes/Gear.js')
const ColdResistance = require('../../gear/attributes/ColdResistance.js')
const FireResistance = require('../../gear/attributes/FireResistance.js')

const HikingBoots = new Gear({
	name: `Hiking Boots`,
	sz: 2,
	attr: [
		ColdResistance,
		FireResistance,
	],
	type: `Armor`
})
HikingBoots.dr = 1
HikingBoots.loc = `Legs`

module.exports = HikingBoots