const Gear = require('../../../classes/Gear.js')

const Goggles = new Gear({
	name: `Goggles`,
	desc: [
		`+3 Constitution to resist toxins in eyes.`,
	],
	sz: 1
})

module.exports = Goggles