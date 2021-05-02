const Gear = require('../../../classes/Gear.js')

const Antibiotic = new Gear({
	name: `Antibiotic`,
	desc: [
		`Prevents infection in Recovery for 1 day.`,
	],
	sz: 0,
	type: `Drug`
})
Antibiotic.mix = 12
Antibiotic.od = false

module.exports = Antibiotic