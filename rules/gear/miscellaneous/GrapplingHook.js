const Gear = require('../../../classes/Gear.js')

const GrapplingHook = new Gear({
	name: `Grappling Hook`,
	desc: [
		`+3 Athletics(Climb and Rappel).`,
		`Holds 100Sz.`,
	],
	sz: 2
})

module.exports = GrapplingHook