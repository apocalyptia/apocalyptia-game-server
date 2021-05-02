const Gear = require('../../../classes/Gear.js')

const Standard9mm = new Gear({
	name: `9mm Standard`,
	type: `Ammo`,
	desc: [
		`Basic ammunition.`,
	],
	sz: 0.01
})
Standard9mm.cal = `9mm`

module.exports = Standard9mm