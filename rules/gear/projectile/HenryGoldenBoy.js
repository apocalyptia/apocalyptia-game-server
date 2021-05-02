const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const HenryGoldenBoy = new Gear({
	name: `Henry Golden Boy Rifle`,
	type: `Projectile Weapon`,
	sz: 3,
	attr: [
		TwoHanded,
	]
})
HenryGoldenBoy.dmg = 0
HenryGoldenBoy.rng = 30
HenryGoldenBoy.cap = 16
HenryGoldenBoy.cal = `.22`

module.exports = HenryGoldenBoy