const Gear = require('../../../classes/Gear.js')
const OneHanded = require('../attributes/OneHanded.js')
const Chop = require('../attributes/Chop.js')

const Hatchet = new Gear({
	name: `Hatchet`,
	type: `Melee Weapon`,
	sz: 2,
	attr: [
		OneHanded,
		Chop,
	]
})
Hatchet.dmg = 2
Hatchet.rng = 1

module.exports = Hatchet