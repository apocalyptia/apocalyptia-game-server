const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const Remington700 = new Gear({
	name: `Remington 700 Rifle`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
	]
})
Remington700.dmg = 6
Remington700.rng = 100
Remington700.cap = 5
Remington700.cal = `.308`

module.exports = Remington700