const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')
const Scatter = require('../attributes/Scatter.js')

const StoegerCoachgun = new Gear({
	name: `Stoeger Coach Shotgun`,
	type: `Projectile Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Rapid,
		Scatter,
	]
})
StoegerCoachgun.dmg = 5
StoegerCoachgun.rng = 10
StoegerCoachgun.cap = 2
StoegerCoachgun.cal = `12g`

module.exports = StoegerCoachgun