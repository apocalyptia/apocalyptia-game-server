import Gear from '../../../classes/Gear.mjs'

const Flashlight = new Gear({
	name: `Flashlight`,
	type: `Electronics`,
	desc: [
		`10yd light. -3 Projectile Attack to Blind 1 round.`,
	],
	sz: 1
})
Flashlight.dur = 3600

export default Flashlight