const Gear = require('../../../classes/Gear.js')

const TransfusionKit = new Gear({
	name: `Transfusion Kit`,
	type: `Medical`,
	desc: [
		`Medicine 9#.`,
		`Inflict 1 Bleeding Damage on the donor to heal 1 Bleeding Damage on the recipient.`,
		`Takes 1hr.`,
	],
	sz: 2
})

module.exports = TransfusionKit