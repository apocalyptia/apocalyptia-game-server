const Gear = require('../../../classes/Gear.js')

const LeatherBelt = new Gear({
	name: `Leather Belt`,
	desc: [
		`1yd strap.`,
		`Stops Limb Bleeding.`,
		`Holds 50Sz.`,
	],
	sz: 0
})

module.exports = LeatherBelt