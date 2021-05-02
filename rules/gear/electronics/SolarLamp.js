const Gear = require('../../../classes/Gear.js')

const SolarLamp = new Gear({
	name: `Solar Lamp`,
	type: `Electronics`,
	desc: [
		`1yd light radius.`,
		`1 day charge.`,
	],
	sz: 1
})
SolarLamp.dur = 10800

module.exports = SolarLamp