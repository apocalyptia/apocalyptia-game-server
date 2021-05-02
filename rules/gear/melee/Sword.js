const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const Sword = new Gear({
	name: `Sword`,
	type: `Melee Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
	]
})
Sword.dmg = 4
Sword.rng = 2

module.exports = Sword