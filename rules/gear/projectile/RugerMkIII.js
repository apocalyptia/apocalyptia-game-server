const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')

const RugerMkIII = new Gear({
	name: `Ruger Mk.III Pistol`,
	type: `Projectile Weapon`,
	sz: 1,
	attr: [
		TwoHanded,
		Rapid,
	]
})
RugerMkIII.dmg = 1
RugerMkIII.rng = 15
RugerMkIII.cap = 10
RugerMkIII.cal = `.22`

module.exports = RugerMkIII