const Gear = require('../../../classes/Gear.js')

const Carabiner = new Gear({
	name: `Carabiner`,
	desc: [
		`+1 Athletics(Climb and Rappel).`,
		`Holds 50Sz.`,
	],
	sz: 0
})

module.exports = Carabiner