const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')

const Kimber1911 = new Gear({
	name: `Kimber 1911 Pistol`,
	type: `Projectile Weapon`,
	sz: 1,
	attr: [
		TwoHanded,
		Rapid,
	]
})
Kimber1911.dmg = 1
Kimber1911.rng = 15
Kimber1911.cap = 7
Kimber1911.cal = `.45`

module.exports = Kimber1911