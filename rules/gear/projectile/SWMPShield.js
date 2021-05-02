const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')

const SWMPShield = new Gear({
	name: `S&W M&P Shield Pistol`,
	type: `Projectile Weapon`,
	sz: 1,
	attr: [
		TwoHanded,
		Rapid
	]
})
SWMPShield.dmg = 1
SWMPShield.rng = 5
SWMPShield.cap = 7
SWMPShield.cal = `9mm`

module.exports = SWMPShield