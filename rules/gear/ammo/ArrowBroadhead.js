const Gear = require('../../../classes/Gear.js')
const Broadhead = require('../attributes/Broadhead.js')
const Pierce = require('../attributes/Pierce.js')

const ArrowBroadhead = new Gear({
	name: `Broadhead Arrow`,
	type: `Ammo`,
	desc: [
		`Hunting arrow.`,
	],
	sz: 0.1,
	attr: [
		Broadhead,
		Pierce,
	],
})
ArrowBroadhead.cal = `Arrow`

module.exports = ArrowBroadhead