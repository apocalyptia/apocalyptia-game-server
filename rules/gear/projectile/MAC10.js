const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Auto = require('../attributes/Auto.js')
const Rapid = require('../attributes/Rapid.js')

const MAC10 = new Gear({
	name: `MAC-10 SMG`,
	type: `Projectile Weapon`,
	sz: 2,
	attr: [
		TwoHanded,
		Auto,
		Rapid,
	]
})
MAC10.dmg = 1
MAC10.rng = 20
MAC10.cap = 30
MAC10.cal = `.45`

module.exports = MAC10