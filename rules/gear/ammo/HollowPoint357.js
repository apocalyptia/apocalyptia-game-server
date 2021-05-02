const Gear = require('../../../classes/Gear.js')
const HollowPoint = require('../attributes/HollowPoint.js')

const HollowPoint357 = new Gear({
	name: `.357 Hollow Point`,
	type: `Ammo`,
	desc: [
		`Self-defense ammunition.`,
	],
	sz: 0.01,
	attr: [
		HollowPoint,
	]
})
HollowPoint357.cal = `.357`

module.exports = HollowPoint357