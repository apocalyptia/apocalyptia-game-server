const Gear = require('../../../classes/Gear.js')
const TwoHanded = require('../attributes/TwoHanded.js')

const SW686Snubnose = new Gear({
	name: `S&W 686 Snubnose Revolver`,
	type: `Projectile Weapon`,
	sz: 1,
	attr: [
		TwoHanded,
	]
})
SW686Snubnose.dmg = 2
SW686Snubnose.rng = 5
SW686Snubnose.cap = 5
SW686Snubnose.cal = `.357`

module.exports = SW686Snubnose