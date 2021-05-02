const Gear = require('../../../classes/Gear.js')

const Stethoscope = new Gear({
	name: `Stethoscope`,
	type: `Medical`,
	desc: [
		`+1 Medicine.`,
		`Perception(Hear) 6# through doors.`,
	],
	sz: 0
})

module.exports = Stethoscope