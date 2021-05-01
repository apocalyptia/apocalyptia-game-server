import Gear from '../../../classes/Gear.mjs'
import HollowPoint from '../attributes/HollowPoint.mjs'

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

export default HollowPoint9mm