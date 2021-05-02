const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')

const WASRAK47 = new Gear({
	name: `WASR AK-47 Rifle`,
	type: `Projectile Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Rapid,
	]
})
WASRAK47.dmg = 4
WASRAK47.rng = 30
WASRAK47.cap = 30
WASRAK47.cal = `7.62`

module.exports = WASRAK47