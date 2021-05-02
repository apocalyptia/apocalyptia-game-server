const Gear = require('../../../classes/Gear.js')

const Lantern = new Gear({
	name: `Lantern`,
	type: `Electronics`,
	desc: [
		`3yd light radius.`,
	],
	sz: 2
})
Lantern.dur = 7200

module.exports = Lantern