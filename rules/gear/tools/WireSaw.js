const Gear = require('../../../classes/Gear.js')

const WireSaw = new Gear({
	name: `Wire Saw`,
	desc: [
		`1 Damage/round of sawing to wood or bone.`,
	],
	sz: 0
})

module.exports = WireSaw