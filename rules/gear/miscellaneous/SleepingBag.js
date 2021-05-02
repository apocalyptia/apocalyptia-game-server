const Gear = require('../../../classes/Gear.js')

const SleepingBag = new Gear({
	name: `Sleeping Bag`,
	desc: [
		`Insulated bag for up to 2 people.`,
		`Cold Resistance +3hrs.`,
	],
	sz: 2
})

module.exports = SleepingBag