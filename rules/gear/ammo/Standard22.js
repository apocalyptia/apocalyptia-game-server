const Gear = require('../../../classes/Gear.js')

const Standard22 = new Gear({
	name: `.22 Standard`,
	type: `Ammo`,
	desc: [
		`Basic ammunition.`,
	],
	sz: 0.005
})
Standard22.cal = `.22`

module.exports = Standard22