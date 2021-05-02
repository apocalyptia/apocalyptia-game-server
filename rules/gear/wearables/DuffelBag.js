const Gear = require('../../../classes/Gear.js')

const DuffelBag = new Gear({
	name: `Duffel Bag`,
	desc: [
		`2 rounds to access.`,
	],
	sz: 3
})
DuffelBag.slots = 40

module.exports = DuffelBag