const Gear = require('../../../classes/Gear.js')

const Standard556 = new Gear({
	name: `5.56mm Standard`,
	type: `Ammo`,
	desc: [
		`Basic ammunition.`,
	],
	sz: 0.02
})
Standard556.cal = `5.56`

module.exports = Standard556