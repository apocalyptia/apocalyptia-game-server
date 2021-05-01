import Gear from '../../../classes/Gear.mjs'
import HollowPoint from '../attributes/HollowPoint.mjs'

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

export default HollowPoint762