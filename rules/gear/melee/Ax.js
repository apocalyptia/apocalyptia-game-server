const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Chop = require('../attributes/Chop.js')
const Slow = require('../attributes/Slow.js')

const Ax = new Gear({
	name: `Ax`,
	type: `Melee Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Chop,
		Slow,
	]
})
Ax.dmg = 4
Ax.rng = 2

module.exports = Ax