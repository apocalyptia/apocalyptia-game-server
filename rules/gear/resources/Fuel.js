const Gear = require('../../../classes/Gear.js')

const Fuel = new Gear({
	name: `Fuel`,
	type: `Resource`,
	desc: [
		`Flammable liquid. Used to power Vehicles and make explosives.`,
	],
	sz: 1
})

module.exports = Fuel