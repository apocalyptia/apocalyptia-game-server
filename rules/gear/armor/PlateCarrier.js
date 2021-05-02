const Gear = require('../../../classes/Gear.js')
const Camo = require('../../gear/attributes/Camo.js')
const ColdResistance = require('../../gear/attributes/ColdResistance.js')
const FireResistance = require('../../gear/attributes/FireResistance.js')

const PlateCarrier = new Gear({
	name: `Plate Carrier`,
	sz: 3,
	attr: [
		Camo,
		ColdResistance,
		FireResistance,
	],
	type: `Armor`
})
PlateCarrier.dr = 3
PlateCarrier.loc = `Torso`

module.exports = PlateCarrier