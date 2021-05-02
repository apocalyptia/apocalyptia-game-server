const Gear = require('../../../classes/Gear.js')

const SinglePointSling = new Gear({
	name: `Single-Point Sling`,
	type: `Accessory`,
	desc: [
		`Draw or stow a 2h Gun without using an Action.`,
	],
	sz: 0
})

module.exports = SinglePointSling