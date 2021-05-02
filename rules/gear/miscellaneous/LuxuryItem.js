const Gear = require('../../../classes/Gear.js')

const LuxuryItem = new Gear({
	name: `Luxury Item`,
	desc: [
		`Toilet paper, toothpaste, cigarette, etc.`,
		`+1 Psyche 1/wk.`,
	],
	sz: 0
})

module.exports = LuxuryItem