const Gear = require('../../../classes/Gear.js')

const WaterFilter = new Gear({
	name: `Water Filter`,
	type: `Medical`,
	desc: [
		`Purifies 1 Water ration (.5gal) per minute.`,
	],
	sz: 1
})

module.exports = WaterFilter