const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')
const Scatter = require('../attributes/Scatter.js')

const BenelliM4 = new Gear({
	name: `Benelli M4 Shotgun`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Rapid,
		Scatter,
	]
})
BenelliM4.dmg = 5
BenelliM4.rng = 15
BenelliM4.cap = 6
BenelliM4.cal = `12g`

module.exports = BenelliM4