const Gear = require('../../../classes/Gear.js')

const ArrowTarget = new Gear({
	name: `Target Arrow`,
	type: `Ammo`,
	desc: [
		`Practice arrow.`,
	],
	sz: 0.1
})
ArrowTarget.cal = `Arrow`

module.exports = ArrowTarget