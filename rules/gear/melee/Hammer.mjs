import Gear from '../../../classes/Gear.mjs'
import OneHanded from '../attributes/OneHanded.mjs'
import Blunt from '../attributes/Blunt.mjs'

const Hammer = new Gear({
	name: `Hammer`,
	type: `Melee Weapon`,
	sz: 2,
	attr: [
		OneHanded,
		Blunt,
	]
})
Hammer.dmg = 2
Hammer.rng = 1

export default Hammer