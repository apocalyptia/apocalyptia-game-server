const Gear = require('../../../classes/Gear.js')

const Compass = new Gear({
	name: `Compass`,
	desc: [
		`+3 Survival(Navigate).`,
		`Always points North.`,
	],
	sz: 0
})

module.exports = Compass