import Gear from '../../../classes/Gear.mjs'
import OneHanded from '../attributes/OneHanded.mjs'
import Chop from '../attributes/Chop.mjs'

const Machete = new Gear({
	name: `Machete`,
	type: `Melee Weapon`,
	sz: 2,
	attr: [
		OneHanded,
		Chop,
	]
})
Machete.dmg = 3
Machete.rng = 2

export default Machete