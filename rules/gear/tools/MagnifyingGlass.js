const Gear = require('../../../classes/Gear.js')

const MagnifyingGlass = new Gear({
	name: `Magnifying Glass`,
	desc: [
		`+6 Perception(See) to inspect tiny details.`,
	],
	sz: 0
})

module.exports = MagnifyingGlass