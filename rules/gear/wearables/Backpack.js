const Gear = require('../../../classes/Gear.js')

const Backpack = new Gear({
	name: `Backpack`,
	desc: [
		`2 rounds to access.`,
	],
	sz: 1
})
Backpack.slots = 30

module.exports = Backpack