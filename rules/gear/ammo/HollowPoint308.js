const Gear = require('../../../classes/Gear.js')
const HollowPoint = require('../attributes/HollowPoint.js')

const HollowPoint308 = new Gear({
	name: `.308 Hollow Point`,
	type: `Ammo`,
	desc: [
		`Self-defense ammunition.`,
	],
	sz: 0.02,
	attr: [
		HollowPoint,
	]
})
HollowPoint308.cal = `.308`

module.exports = HollowPoint308