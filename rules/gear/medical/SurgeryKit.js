const Gear = require('../../../classes/Gear.js')

const SurgeryKit = new Gear({
	name: `Surgery Kit`,
	type: `Medical`,
	desc: [
		`+3 Medicine(Surgery).`,
	],
	sz: 3
})

module.exports = SurgeryKit