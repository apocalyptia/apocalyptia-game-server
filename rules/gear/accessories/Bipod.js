const Gear = require('../../../classes/Gear.js')

const Bipod = new Gear({
	name: `Bipod`,
	type: `Accessory`,
	desc: [
		`Ignore Size requirement.`,
		`1 round setup.`,
	],
	sz: 1
})

module.exports = Bipod