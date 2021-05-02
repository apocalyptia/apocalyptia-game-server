const Gear = require('../../../classes/Gear.js')
const ColdResistance = require('../../gear/attributes/ColdResistance.js')

const WinterCoat = new Gear({
	name: `Winter Coat`,
	sz: 2,
	attr: [
		ColdResistance,
	],
	type: `Armor`
})
WinterCoat.dr = 1
WinterCoat.loc = `Arms, Torso`

module.exports = WinterCoat