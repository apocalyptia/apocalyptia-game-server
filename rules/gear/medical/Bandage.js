const Gear = require('../../../classes/Gear.js')

const Bandage = new Gear({
	name: `Bandage`,
	type: `Medical`,
	desc: [
		`+1 Medicine(First-Aid).`,
		`1 use.`,
	],
	sz: 0
})

module.exports = Bandage