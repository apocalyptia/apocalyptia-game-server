const Gear = require('../../../classes/Gear.js')

const FirstAidKit = new Gear({
	name: `First-Aid Kit`,
	type: `Medical`,
	desc: [
		`+1 Medicine(First-Aid).`,
		`5 uses.`,
	],
	sz: 1
})

module.exports = FirstAidKit