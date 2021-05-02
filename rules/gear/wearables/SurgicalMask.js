const Gear = require('../../../classes/Gear.js')

const SurgicalMask = new Gear({
	name: `Surgical Mask`,
	desc: [
		`+1 Constitution vs airborne toxins.`,
		`Mask.`
	],
	sz: 0
})

module.exports = SurgicalMask