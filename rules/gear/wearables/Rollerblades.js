const Gear = require('../../../classes/Gear.js')

const Rollerblades = new Gear({
	name: `Rollerblades`,
	desc: [
		`Athletics 6#.`,
		`Speed x3.`,
		`1 round equip.`,
		`Fail:Prone.`,
	],
	sz: 2
})

module.exports = Rollerblades