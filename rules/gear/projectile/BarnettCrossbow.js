const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const BarnettCrossbow = new Gear({
	name: `Barnett Crossbow`,
	type: `Projectile Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
	]
})
BarnettCrossbow.dmg = 3
BarnettCrossbow.rng = 15
BarnettCrossbow.cap = 1
BarnettCrossbow.cal = `Arrow`

module.exports = BarnettCrossbow