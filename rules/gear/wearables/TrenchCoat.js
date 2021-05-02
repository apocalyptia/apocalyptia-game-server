const Gear = require('../../../classes/Gear.js')

const TrenchCoat = new Gear({
	name: `Trench Coat`,
	desc: [
		`Cold Resistance.`,
		`+1 Stealth.`,
	],
	sz: 1
})
TrenchCoat.slots = 4

module.exports = TrenchCoat