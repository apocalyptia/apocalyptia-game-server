const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Blunt = require('../attributes/Blunt.js')
const Slow = require('../attributes/Slow.js')

const Sledgehammer = new Gear({
	name: `Sledgehammer`,
	type: `Melee Weapon`,
	sz: 5,
	attr: [
		TwoHanded,
		Blunt,
		Slow,
	]
})
Sledgehammer.dmg = 4
Sledgehammer.rng = 2

module.exports = Sledgehammer