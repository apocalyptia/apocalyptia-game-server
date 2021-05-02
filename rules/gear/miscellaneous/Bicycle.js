const Gear = require('../../../classes/Gear.js')

const Bicycle = new Gear({
	name: `Bicycle`,
	desc: [
		`Athletics 3#.`,
		`Speed x3yds (x.7mph).`,
		`2h.`,
	],
	sz: 8
})

module.exports = Bicycle