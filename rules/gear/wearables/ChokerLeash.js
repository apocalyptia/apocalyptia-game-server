const Gear = require('../../../classes/Gear.js')

const ChokerLeash = new Gear({
	name: `Choker Leash`,
	desc: [
		`+3 Tame.`,
		`Grabbed.`,
		`Constitution +3 vs Constitution to control.`,
	],
	sz: 1
})

module.exports = ChokerLeash