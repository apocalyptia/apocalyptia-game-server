const Gear = require('../../../classes/Gear.js')

const Parts = new Gear({
	name: `Parts`,
	type: `Resource`,
	desc: [
		`Scrap used for Build and Science(Tech).`,
	],
	sz: 1
})

module.exports = Parts