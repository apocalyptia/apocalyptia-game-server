const Gear = require('../../../classes/Gear.js')

const BDUJacket = new Gear({
	name: `BDU Jacket`,
	desc: [
		`Camo.`,
	],
	sz: 0
})
BDUJacket.slots = 4

module.exports = BDUJacket