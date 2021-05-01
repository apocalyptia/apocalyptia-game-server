import Gear from '../../../classes/Gear.mjs'
import OneHanded from '../attributes/OneHanded.mjs'
import Chop from '../attributes/Chop.mjs'

const Hatchet = new Gear({
	name: `Hatchet`,
	type: `Melee Weapon`,
	sz: 2,
	attr: [
		OneHanded,
		Chop,
	]
})
Hatchet.dmg = 2
Hatchet.rng = 1

export default Hatchet