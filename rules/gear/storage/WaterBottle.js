const Gear = require('../../../classes/Gear.js')

const WaterBottle = new Gear({
	name: `Water Bottle`,
	desc: [
		`Holds 1 unit (.5gal) of liquid.`,
	],
	sz: 1
})
WaterBottle.slots = 1

module.exports = WaterBottle