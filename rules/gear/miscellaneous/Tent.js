const Gear = require('../../../classes/Gear.js')

const Tent = new Gear({
	name: `Tent`,
	desc: [
		`4 person.`,
		`5min setup/take-down.`,
		`Cold Resistance +3hrs.`,
	],
	sz: 4
})

module.exports = Tent