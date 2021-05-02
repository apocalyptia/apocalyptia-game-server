const Gear = require('../../../classes/Gear.js')
const Camo = require('../../gear/attributes/Camo.js')
const ColdResistance = require('../../gear/attributes/ColdResistance.js')

const GhillieSuit = new Gear({
	name: `Ghillie Suit`,
	sz: 3,
	attr: [
		Camo,
		ColdResistance,
	],
	type: `Armor`
})
GhillieSuit.dr = 1
GhillieSuit.loc = `Full Body`

module.exports = GhillieSuit