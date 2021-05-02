const Gear = require('../../../classes/Gear.js')

const Cooler = new Gear({
	name: `Cooler`,
	desc: [
		`Preserves Hunted or Foraged Food for 6 days.`,
	],
	sz: 5
})
Cooler.slots = 30

module.exports = Cooler