const Gear = require('../../../classes/Gear.js')

const Headlamp = new Gear({
	name: `Headlamp`,
	type: `Electronics`,
	desc: [
		`3yd light. Hands free.`,
	],
	sz: 0
})
Headlamp.dur = 3600

module.exports = Headlamp