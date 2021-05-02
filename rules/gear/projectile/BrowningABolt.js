const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const BrowningABolt = new Gear({
	name: `Browning A-Bolt Rifle`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
	]
})
BrowningABolt.dmg = 3
BrowningABolt.rng = 60
BrowningABolt.cap = 5
BrowningABolt.cal = `5.56`

module.exports = BrowningABolt