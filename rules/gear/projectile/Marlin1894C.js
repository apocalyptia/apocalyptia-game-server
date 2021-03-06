const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const Marlin1894C = new Gear({
	name: `Marlin 1894C Rifle`,
	type: `Projectile Weapon`,
	sz: 3,
	dmg: 2,
	rng: 30,
	attr: [
		TwoHanded,
	],
	cap: 9,
	cal: `.357`
})
Marlin1894C.dmg = 2
Marlin1894C.rng = 30
Marlin1894C.cap = 9
Marlin1894C.cal = `.357`

module.exports = Marlin1894C