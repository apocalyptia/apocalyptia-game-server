const Gear = require('../../../classes/Gear.js')

const PressureCuff = new Gear({
	name: `Pressure Cuff`,
	type: `Medical`,
	desc: [
		`+1 Medicine.`,
	],
	sz: 1
})

module.exports = PressureCuff