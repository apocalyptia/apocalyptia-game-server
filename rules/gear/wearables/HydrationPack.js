const Gear = require('../../../classes/Gear.js')

const HydrationPack = new Gear({
	name: `Hydration Pack`,
	desc: [
		`Holds 4 units (2gal) of liquid.`,
	],
	sz: 0
})
HydrationPack.slots = 4

module.exports = HydrationPack