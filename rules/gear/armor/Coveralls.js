const Gear = require('../../../classes/Gear.js')
const Camo = require('../../gear/attributes/Camo.js')
const ColdResistance = require('../../gear/attributes/ColdResistance.js')

const Coveralls = new Gear({
	name: `Coveralls`,
	sz: 3,
	attr: [
		Camo,
		ColdResistance,
	],
	type: `Armor`
})
Coveralls.dr = 1
Coveralls.loc = `Arms, Torso, Legs`

module.exports = Coveralls