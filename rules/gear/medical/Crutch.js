const Gear = require('../../../classes/Gear.js')

const Crutch = new Gear({
	name: `Crutch`,
	type: `Medical`,
	desc: [
		`Halves Leg Damage Pain penalty to Speed.`,
	],
	sz: 3
})

module.exports = Crutch