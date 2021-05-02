const Gear = require('../../../classes/Gear.js')
const ColdResistance = require('../../gear/attributes/ColdResistance.js')
const FireResistance = require('../../gear/attributes/FireResistance.js')
const Mask = require('../../gear/attributes/Mask.js')

const FirefighterSuit = new Gear({
	name: `Firefighter Suit`,
	sz: 5,
	attr: [
		ColdResistance,
		FireResistance,
		Mask,
	],
	type: `Armor`
})
FirefighterSuit.dr = 1
FirefighterSuit.loc = `Full Body`

module.exports = FirefighterSuit