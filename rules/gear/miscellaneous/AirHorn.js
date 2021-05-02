const Gear = require('../../../classes/Gear.js')

const AirHorn = new Gear({
	name: `Air Horn`,
	desc: [
		`Emits a loud shriek up to a 1 mile radius.`,
	],
	sz: 1
})

module.exports = AirHorn