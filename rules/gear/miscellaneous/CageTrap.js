const Gear = require('../../../classes/Gear.js')

const CageTrap = new Gear({
	name: `Cage Trap`,
	desc: [
		`+3 Survival(Forage).`,
		`Takes 1day.`,
	],
	sz: 5
})

module.exports = CageTrap