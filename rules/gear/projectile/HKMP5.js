const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Auto = require('../attributes/Auto.js')
const Rapid = require('../attributes/Rapid.js')

const HKMP5 = new Gear({
	name: `H&K MP5 SMG`,
	type: `Projectile Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Auto,
		Rapid,
	]
})
HKMP5.dmg = 1
HKMP5.rng = 20
HKMP5.cap = 30
HKMP5.cal = `9mm`

module.exports = HKMP5