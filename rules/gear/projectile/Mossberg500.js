const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Scatter = require('../attributes/Scatter.js')

const Mossberg500 = new Gear({
	name: `Mossberg 500 Shotgun`,
	type: `Projectile Weapon`,
	sz: 2,
	attr: [
		TwoHanded,
		Scatter,
	]
})
Mossberg500.dmg = 5
Mossberg500.rng = 10
Mossberg500.cap = 5
Mossberg500.cal = `12g`

module.exports = Mossberg500