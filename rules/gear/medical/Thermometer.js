const Gear = require('../../../classes/Gear.js')

const Thermometer = new Gear({
	name: `Thermometer`,
	type: `Medical`,
	desc: [
		`+1 Medicine.`,
		`Accurately reads temperature.`,
	],
	sz: 0
})

module.exports = Thermometer