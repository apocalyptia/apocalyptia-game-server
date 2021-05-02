const Gear = require('../../../classes/Gear.js')

const Hacksaw = new Gear({
	name: `Hacksaw`,
	desc: [
		`1 Damage/round of sawing to almost any material.`,
	],
	sz: 2
})

module.exports = Hacksaw