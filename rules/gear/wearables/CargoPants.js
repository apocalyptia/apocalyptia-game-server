const Gear = require('../../../classes/Gear.js')

const CargoPants = new Gear({
	name: `Cargo Pants`,
	desc: [
		`Camo.`,
	],
	sz: 1
})
CargoPants.slots = 6

module.exports = CargoPants