const Gear = require('../../../classes/Gear.js')

const SprayPaint = new Gear({
	name: `Spray Paint`,
	desc: [
		`Projectile Attack, Called Shot: Head.`,
		`Blind d6 rounds.`,
		`10 uses.`,
	],
	sz: 1
})

module.exports = SprayPaint