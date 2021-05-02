const Gear = require('../../../classes/Gear.js')
const HollowPoint = require('../attributes/HollowPoint.js')

const HollowPoint22 = new Gear({
	name: `.22 Hollow Point`,
	type: `Ammo`,
	desc: [
		`Self-defense ammunition.`,
	],
	sz: .005,
	attr: [
		HollowPoint,
	],
})
HollowPoint22.cal = `.22`

module.exports = HollowPoint22