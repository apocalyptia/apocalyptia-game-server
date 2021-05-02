const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')
const Rapid = require('../attributes/Rapid.js')

const NorincoSKS = new Gear({
	name: `Norinco SKS Rifle`,
	type: `Projectile Weapon`,
	sz: 4,
	attr: [
		TwoHanded,
		Rapid,
	]
})
NorincoSKS.dmg = 4
NorincoSKS.rng = 50
NorincoSKS.cap = 10
NorincoSKS.cal = `7.62`

module.exports = NorincoSKS