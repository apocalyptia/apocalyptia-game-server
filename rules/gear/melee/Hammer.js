const Gear = require('../../../classes/Gear.js')
const OneHanded = require('../attributes/OneHanded.js')
const Blunt = require('../attributes/Blunt.js')

const Hammer = new Gear({
	name: `Hammer`,
	type: `Melee Weapon`,
	sz: 2,
	attr: [
		OneHanded,
		Blunt,
	]
})
Hammer.dmg = 2
Hammer.rng = 1

module.exports = Hammer