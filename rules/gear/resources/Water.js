const Gear = require('../../../classes/Gear.js')

const Water = new Gear({
	name: `Water`,
	type: `Resource`,
	desc: [
		`1 unit Needed per day to prevent Dehydration.`,
	],
	sz: 1
})

module.exports = Water