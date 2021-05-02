const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')
const Scatter = require('../attributes/Scatter.js')

const CZUpland = new Gear({
	name: `CZ Upland Shotgun`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Rapid,
		Scatter,
	]
})
CZUpland.dmg = 5
CZUpland.rng = 20
CZUpland.cap = 2
CZUpland.cal = `12g`

module.exports = CZUpland