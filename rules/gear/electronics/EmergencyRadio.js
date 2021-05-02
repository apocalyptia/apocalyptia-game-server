const Gear = require('../../../classes/Gear.js')

const EmergencyRadio = new Gear({
	name: `Emergency Radio`,
	type: `Electronics`,
	desc: [
		`AM/FM/Shortwave.`,
		`1yd light.`,
	],
	sz: 1
})
EmergencyRadio.dur = 7200

module.exports = EmergencyRadio