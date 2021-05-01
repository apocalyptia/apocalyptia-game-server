import Gear from '../../../classes/Gear.mjs'
import HollowPoint from '../attributes/HollowPoint.mjs'

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

export default HollowPoint22