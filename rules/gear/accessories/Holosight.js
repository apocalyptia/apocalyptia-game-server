const Gear = require('../../../classes/Gear.js')

const Holosight = new Gear({
	name: `Holosight`,
	type: `Accessory`,
	desc: [
		`+1 to Projectile Attacks.`,
	],
	sz: 0
})
Holosight.dur = 28800

module.exports = Holosight