const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const SavageMkII = new Gear({
	name: `Savage Mk.II Rifle`,
	type: `Projectile Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
	]
})
SavageMkII.dmg = 1
SavageMkII.rng = 40
SavageMkII.cap = 10
SavageMkII.cal = `.22`

module.exports = SavageMkII