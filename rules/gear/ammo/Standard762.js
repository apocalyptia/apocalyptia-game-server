const Gear = require('../../../classes/Gear.js')

const Standard762 = new Gear({
	name: `7.62mm Standard`,
	type: `Ammo`,
	desc: [
		`Basic ammunition.`,
	],
	sz: 0.02
})
Standard762.cal = `7.62`

module.exports = Standard762