const Gear = require('../../../classes/Gear.js')
const OneHanded = require('../attributes/OneHanded.js')
const Pierce = require('../attributes/Pierce.js')
const Rapid = require('../attributes/Rapid.js')

const Knife = new Gear({
	name: `Knife`,
	type: `Melee Weapon`,
	sz: 1,
	attr: [
		OneHanded,
		Pierce,
		Rapid,
	]
})
Knife.dmg = 1
Knife.rng = 1

module.exports = Knife