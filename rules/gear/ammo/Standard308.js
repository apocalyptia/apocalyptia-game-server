const Gear = require('../../../classes/Gear.js')

const Standard308 = new Gear({
	name: `.308 Standard`,
	type: `Ammo`,
	desc: [
		`Basic ammunition.`,
	],
	sz: 0.02
})
Standard308.cal = `.308`

module.exports = Standard308