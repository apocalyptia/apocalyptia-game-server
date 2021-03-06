const Gear = require('../../../classes/Gear.js')

const Multimeter = new Gear({
	name: `Multimeter`,
	type: `Electronics`,
	desc: [
		`+3 Science(Technology).`,
		`Detects voltage, battery life, and closed circuits.`,
	],
	sz: 1
})
Multimeter.dur = 57600

module.exports = Multimeter