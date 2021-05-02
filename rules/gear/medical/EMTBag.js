const Gear = require('../../../classes/Gear.js')

const EMTBag = new Gear({
	name: `EMT Bag`,
	type: `Medical`,
	desc: [
		`+3 Medicine(First-Aid).`,
		`30 uses.`,
	],
	sz: 5
})

module.exports = EMTBag