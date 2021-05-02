const Gear = require('../../../classes/Gear.js')

const Skateboard = new Gear({
	name: `Skateboard`,
	desc: [
		`Athletics 6#.`,
		`Speed x3.`,
		`Fail:Prone.`,
	],
	sz: 2
})

module.exports = Skateboard