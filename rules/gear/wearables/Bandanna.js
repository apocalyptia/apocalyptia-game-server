const Gear = require('../../../classes/Gear.js')

const Bandanna = new Gear({
	name: `Bandanna`,
	desc: [
		`+1 Constitution vs airborne toxins.`,
		`Can use as Bandage.`,
	],
	sz: 0
})

module.exports = Bandanna