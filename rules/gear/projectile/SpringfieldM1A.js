const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')

const SpringfieldM1A = new Gear({
	name: `Springfield M1A Rifle`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Rapid,
	]
})
SpringfieldM1A.dmg = 6
SpringfieldM1A.rng = 80
SpringfieldM1A.cap = 20
SpringfieldM1A.cal = `.308`

module.exports = SpringfieldM1A