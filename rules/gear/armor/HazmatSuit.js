const Gear = require('../../../classes/Gear.js')
const Impermeable = require('../../gear/attributes/Impermeable.js')
const Mask = require('../../gear/attributes/Mask.js')

const HazmatSuit = new Gear({
	name: `Hazmat Suit`,
	sz: 2,
	attr: [
		Impermeable,
		Mask,
	],
	type: `Armor`
})
HazmatSuit.dr = 0
HazmatSuit.loc = `Full Body`

module.exports = HazmatSuit