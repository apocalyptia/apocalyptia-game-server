const Gear = require('../../../classes/Gear.js')

const MapTopographic = new Gear({
	name: `Map (Topographic)`,
	desc: [
		`+3 Survival(Navigate) in a given Region.`,
	],
	sz: 0,
	type: `Document`
})

module.exports = MapTopographic