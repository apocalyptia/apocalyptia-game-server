const Gear = require('../../../classes/Gear.js')

const Candy = new Gear({
	name: `Candy`,
	desc: [
		`Restores 1 Luck point.`,
		`1/day.`,
	],
	sz: 0
})

module.exports = Candy