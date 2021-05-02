const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')

const ArmaliteAR15 = new Gear({
	name: `Armalite AR-15 Rifle`,
	type: `Projectile Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
		Rapid,
	]
})
ArmaliteAR15.dmg = 3
ArmaliteAR15.rng = 50
ArmaliteAR15.cap = 30
ArmaliteAR15.cal = `5.56`

module.exports = ArmaliteAR15