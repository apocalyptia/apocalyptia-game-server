const Gear = require('../../../classes/Gear.js')

const Lockpicks = new Gear({
	name: `Lockpicks`,
	desc: [
		`+3 Larceny(Disable) key locks.`,
		`6 picks.`,
	],
	sz: 1
})

module.exports = Lockpicks