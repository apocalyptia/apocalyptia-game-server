const Gear = require('../../../classes/Gear.js')

const RoadFlare = new Gear({
	name: `Road Flare`,
	desc: [
		`3 Fire Damage.`,
		`10yd light radius for 20mins.`,
	],
	sz: 1
})

module.exports = RoadFlare