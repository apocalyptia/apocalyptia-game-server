import Gear from '../../../classes/Gear.mjs'
import HollowPoint from '../attributes/HollowPoint.mjs'

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

export default HollowPoint357