const Gear = require('../../../classes/Gear.js')

const Chemicals = new Gear({
	name: `Chemicals`,
	type: `Resource`,
	desc: [
		`Substances used for Science(Chemistry).`,
	],
	sz: 1
})

module.exports = Chemicals