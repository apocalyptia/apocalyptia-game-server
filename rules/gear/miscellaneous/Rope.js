const Gear = require('../../../classes/Gear.js')

const Rope = new Gear({
	name: `Rope`,
	desc: [
		`30yd nylon coil.`,
		`Holds 100Sz.`,
		`Survival 6# to use as Handcuffs.`,
	],
	sz: 2
})

module.exports = Rope