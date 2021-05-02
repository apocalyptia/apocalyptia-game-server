const Gear = require('../../../classes/Gear.js')

const EggTimer = new Gear({
	name: `Egg Timer`,
	desc: [
		`Set up to 60mins.`,
		`Loud ringing for 1min.`,
	],
	sz: 0
})

module.exports = EggTimer