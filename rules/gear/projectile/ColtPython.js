const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const ColtPython = new Gear({
	name: `Colt Python Revolver`,
	type: `Projectile Weapon`,
	sz: 1,
	attr: [
		TwoHanded,
	]
})
ColtPython.dmg = 2
ColtPython.rng = 10
ColtPython.cap = 6
ColtPython.cal = `.357`

module.exports = ColtPython