const Gear = require('../../../classes/Gear.js')
const HollowPoint = require('../attributes/HollowPoint.js')

const HollowPoint9mm = new Gear({
	name: `9mm Hollow Point`,
	type: `Ammo`,
	desc: [
		`Self-defense ammunition.`,
	],
	sz: 0.01,
	attr: [
		HollowPoint,
	]
})
HollowPoint9mm.cal = `9mm`

module.exports = HollowPoint9mm