const Gear = require('../../../classes/Gear.js')
const HollowPoint = require('../attributes/HollowPoint.js')

const HollowPoint762 = new Gear({
	name: `7.62mm Hollow Point`,
	type: `Ammo`,
	desc: [
		`Self-defense ammunition.`,
	],
	sz: 0.02,
	attr: [
		HollowPoint,
	]
})
HollowPoint762.cal = `7.62`

module.exports = HollowPoint762