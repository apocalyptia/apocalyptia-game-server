const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Scatter = require('../attributes/Scatter.js')

const Remington870 = new Gear({
	name: `Remington 870 Shotgun`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Scatter,
	]
})
Remington870.dmg = 5
Remington870.rng = 15
Remington870.cap = 6
Remington870.cal = `12g`

module.exports = Remington870