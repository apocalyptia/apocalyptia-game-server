const Gear = require('../../../classes/Gear.js')

const Standard357 = new Gear({
	name: `.357 Standard`,
	type: `Ammo`,
	desc: [
		`Basic ammunition.`,
	],
	sz: 0.01
})
Standard357.cal = `.357`

module.exports = Standard357