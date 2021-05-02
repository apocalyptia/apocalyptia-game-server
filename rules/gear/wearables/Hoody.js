const Gear = require('../../../classes/Gear.js')

const Hoody = new Gear({
	name: `Hoody`,
	desc: [
		`Cold Resistance.`,
	],
	sz: 0
})
Hoody.slots = 2

module.exports = Hoody