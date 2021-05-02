const Gear = require('../../../classes/Gear.js')

const MapLocal = new Gear({
	name: `Map (Local)`,
	desc: [
		`+1 Survival(Navigate) in a given Region.`,
	],
	sz: 0,
	type: `Document`
})

module.exports = MapLocal