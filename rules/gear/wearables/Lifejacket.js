const Gear = require('../../../classes/Gear.js')

const Lifejacket = new Gear({
	name: `Lifejacket`,
	desc: [
		`+6 Athletics(Swim).`,
		`Prevents drowning.`,
	],
	sz: 3
})

module.exports = Lifejacket