const Gear = require('../../../classes/Gear.js')
const OneHanded = require('../attributes/OneHanded.js')
const Pierce = require('../attributes/Pierce.js')

const Spear = new Gear({
	name: `Spear`,
	type: `Melee Weapon`,
	sz: 3,
	attr: [
		OneHanded,
		Pierce,
	]
})
Spear.dmg = 4
Spear.rng = 3

module.exports = Spear