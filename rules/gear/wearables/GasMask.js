const Gear = require('../../../classes/Gear.js')

const GasMask = new Gear({
	name: `Gas Mask`,
	desc: [
		`+6 Constitution vs airborne toxins.`,
		`Mask.`,
		`-1 Perception.`,
	],
	sz: 2
})

module.exports = GasMask