const Gear = require('../../../classes/Gear.js')

const Lighter = new Gear({
	name: `Lighter`,
	desc: [
		`Makes a small fire.`,
		`1yd radius light.`,
	],
	sz: 0
})

module.exports = Lighter